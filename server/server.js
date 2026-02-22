import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
const PORT = 5006;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',       // <-- Update this with your MySQL password
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Initialize database and table on startup
async function initDatabase() {
  try {
    const connection = await pool.getConnection();
    
    // Create database if it doesn't exist
    await connection.query('CREATE DATABASE IF NOT EXISTS information_brochure');
    await connection.query('USE information_brochure');
    
    // Create enquiries table if it doesn't exist
    await connection.query(`
      CREATE TABLE IF NOT EXISTS enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    connection.release();
    console.log('✅ Database and table initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize database:', error.message);
    process.exit(1);
  }
}

// Switch to the correct database for all pool connections
pool.on('connection', (connection) => {
  connection.query('USE information_brochure');
});

// Admin Credentials (stored in server file as requested)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'ace_admin_2024' // You can change this
};

// Simple Authentication Middleware
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Basic ${Buffer.from(`${ADMIN_CREDENTIALS.username}:${ADMIN_CREDENTIALS.password}`).toString('base64')}`) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  next();
};

// POST /api/admin/login - Simple login check
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// POST /api/enquiries - Store a new enquiry
app.post('/api/enquiries', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields (name, email, phone) are required' 
      });
    }

    const [result] = await pool.query(
      'INSERT INTO enquiries (name, email, phone) VALUES (?, ?, ?)',
      [name, email, phone]
    );

    console.log(`📝 New enquiry saved: ${name} (${email})`);

    res.status(201).json({
      success: true,
      message: 'Enquiry saved successfully',
      id: result.insertId
    });
  } catch (error) {
    console.error('❌ Error saving enquiry:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to save enquiry. Please try again.' 
    });
  }
});

// GET /api/admin/enquiries - Retrieve all enquiries with optional filtering
app.get('/api/admin/enquiries', authenticateAdmin, async (req, res) => {
  try {
    const { search } = req.query;
    let query = 'SELECT * FROM enquiries';
    let params = [];

    if (search) {
      query += ' WHERE name LIKE ? OR email LIKE ? OR phone LIKE ?';
      const searchParam = `%${search}%`;
      params = [searchParam, searchParam, searchParam];
    }

    query += ' ORDER BY created_at DESC';

    const [rows] = await pool.query(query, params);

    res.json({
      success: true,
      count: rows.length,
      data: rows
    });
  } catch (error) {
    console.error('❌ Error fetching enquiries:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch enquiries' 
    });
  }
});

// DELETE /api/admin/enquiries/:id - Delete an enquiry
app.delete('/api/admin/enquiries/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM enquiries WHERE id = ?', [id]);
    
    res.json({
      success: true,
      message: 'Enquiry deleted successfully'
    });
  } catch (error) {
    console.error('❌ Error deleting enquiry:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to delete enquiry' 
    });
  }
});

// Start server
async function start() {
  await initDatabase();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

start();
