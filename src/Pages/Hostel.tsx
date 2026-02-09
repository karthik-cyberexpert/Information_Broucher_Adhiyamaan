import { useState } from "react";

import "../components/Menu.css";
import "./Hostel.css";

const hostelImages = [
  "/images/hostel.jpg",
  "/images/hostel.jpg",
  "/images/hostel.jpg",
];

const facilities = [
  { icon: "🛏️", title: "Furnished Rooms", desc: "Well-ventilated rooms with beds, tables & wardrobes" },
  { icon: "🍽️", title: "Mess & Dining", desc: "Hygienic food with varied menu options" },
  { icon: "📶", title: "Wi-Fi Enabled", desc: "High-speed internet throughout campus" },
  { icon: "🔒", title: "24/7 Security", desc: "Round-the-clock security with CCTV surveillance" },
  { icon: "🏥", title: "Medical Facility", desc: "On-campus medical care and first aid" },
  { icon: "🧺", title: "Laundry Service", desc: "Regular laundry facility for students" },
];

export default function Hostel() {

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="hostel-page">
      {/* Background */}
      {/* Background */}
      <video className="hostel-bg-video" autoPlay loop muted playsInline>
        <source src="/media/hostel.mp4" type="video/mp4" />
      </video>

      {/* Header */}
      <header className="hostel-header">
        <h1>Hostel Facilities</h1>
        <p>A Home Away From Home</p>
      </header>

      {/* Image Gallery */}
      <section className="hostel-gallery">
        <div className="gallery-main">
          <img src={hostelImages[activeImage]} alt="Hostel" />
        </div>
        <div className="gallery-thumbs">
          {hostelImages.map((img, i) => (
            <div
              key={i}
              className={`thumb ${activeImage === i ? "active" : ""}`}
              onClick={() => setActiveImage(i)}
            >
              <img src={img} alt={`Thumb ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="hostel-facilities">
        <h2>Our Facilities</h2>
        <div className="facilities-grid">
          {facilities.map((item, i) => (
            <div key={i} className="facility-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="facility-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Info Cards */}
      <section className="hostel-info">
        <div className="info-card boys">
          <h3>🏠 Boys Hostel</h3>
          <ul>
            <li>Capacity: 1500+ students</li>
            <li>Multiple blocks with modern amenities</li>
            <li>Recreation room & gym</li>
            <li>Indoor games facilities</li>
          </ul>
        </div>
        <div className="info-card girls">
          <h3>🏠 Girls Hostel</h3>
          <ul>
            <li>Capacity: 800+ students</li>
            <li>Enhanced security measures</li>
            <li>Common room with TV</li>
            <li>Reading room & library access</li>
          </ul>
        </div>
      </section>

      {/* Navigation Button */}
      {/* <div className="me-nav-controls">
        <button className="me-nav-btn menu-nav-btn" onClick={() => navigate("/menu")}>
          <img src="/images/menu.gif" alt="Menu" />
        </button>
      </div> */}
    </div>
  );
}
