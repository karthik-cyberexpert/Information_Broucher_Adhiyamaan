import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

interface Enquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchEnquiries = useCallback(async (searchTerm: string = '') => {
    setLoading(true);
    const auth = localStorage.getItem('adminAuth');
    if (!auth) {
      navigate('/admin/login');
      return;
    }

    try {
      const response = await fetch(`/api/admin/enquiries?search=${encodeURIComponent(searchTerm)}`, {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });

      if (response.status === 401) {
        localStorage.removeItem('adminAuth');
        navigate('/admin/login');
        return;
      }

      const data = await response.json();
      if (data.success) {
        setEnquiries(data.data);
      } else {
        setError('Failed to fetch enquiries');
      }
    } catch {
      setError('Connection error');
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchEnquiries(search);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;

    const auth = localStorage.getItem('adminAuth');
    try {
      const response = await fetch(`/api/admin/enquiries/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });

      if (response.ok) {
        setEnquiries(enquiries.filter(e => e.id !== id));
      } else {
        alert('Failed to delete enquiry');
      }
    } catch {
      alert('Error connecting to server');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h2>Admin<span>Panel</span></h2>
        </div>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </nav>

      <main className="dashboard-content">
        <header className="content-header">
          <div className="header-text">
            <h1>Enquiries</h1>
            <p>Manage and view details submitted by visitors</p>
          </div>

          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search by name, email or phone..."
              value={search}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>
        </header>

        {error && <div className="dashboard-error">{error}</div>}

        <div className="table-wrapper">
          {loading ? (
            <div className="loading-state">Loading enquiries...</div>
          ) : enquiries.length === 0 ? (
            <div className="empty-state">No enquiries found matching your search.</div>
          ) : (
            <table className="enquiries-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Date Submitted</th>
                  <th className="actions-col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enquiry) => (
                  <tr key={enquiry.id}>
                    <td>#{enquiry.id}</td>
                    <td className="name-cell">{enquiry.name}</td>
                    <td>{enquiry.email}</td>
                    <td>{enquiry.phone}</td>
                    <td>{new Date(enquiry.created_at).toLocaleString()}</td>
                    <td className="actions-cell">
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(enquiry.id)}
                        title="Delete Enquiry"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
