import React, { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import About from '../AboutUS/About';

export default function Home() {
  const NavBtn = useNavigate();
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    // Fetch lost items
    fetch("/api/items/lost")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setLostItems(data.slice(-4).reverse());
        } else {
          console.error("Expected array for lostItems, got:", data);
        }
      })
      .catch((err) => console.error("Error fetching lost items:", err));

    // Fetch found items
    fetch("/api/items/found")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setFoundItems(data.slice(-4).reverse());
        } else {
          console.error("Expected array for foundItems, got:", data);
        }
      })
      .catch((err) => console.error("Error fetching found items:", err));
  }, []);

  return (
    <div className="home-container">
      <section className='hero-banner'>
        <h1>Welcome to the Lost & Found Portal</h1>
        <p>Report or find lost and found items within your campus easily and quickly.</p>
        <div className="action-buttons">
          <button className="btn lost" onClick={() => NavBtn('/report-lost')}>Report Lost Item</button>
          <button className="btn found" onClick={() => NavBtn('/report-found')}>Report Found Item</button>
        </div>
      </section>

      <About />

      {/* Recently Lost Items */}
      <section className="preview-items">
        <h2>Recently Lost Items</h2>
        <div className="items-grid">
          {lostItems.length > 0 ? (
            lostItems.map((item) => (
              <div className="item-card" key={item._id}>
                <img src={`/uploads/${item.image}`} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>No lost items found.</p>
          )}
        </div>
      </section>

      {/* Recently Found Items */}
      <section className="preview-items">
        <h2>Recently Found Items</h2>
        <div className="items-grid">
          {foundItems.length > 0 ? (
            foundItems.map((item) => (
              <div className="item-card" key={item._id}>
                <img src={`/uploads/${item.image}`} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>No found items available.</p>
          )}
        </div>
      </section>
    </div>
  );
}
