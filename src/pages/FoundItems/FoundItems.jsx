import './FoundItems.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from 'axios';

export default function FoundItems() {
  const [allItems, setAllItems] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/found-items'); // ✅ Fixed route
        setAllItems(res.data);
      } catch (err) {
        console.error('Error fetching found items:', err);
      }
    };
    fetchItems();
  }, []);

  const filteredItems = allItems.filter(item =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="found-items-page">
      <h2 className='page-title'>Found Items</h2>
      <SearchBar searchItem={searchItem} onSearchChange={setSearchItem} />

      <div className="found-items-container">
        {filteredItems.map(item => (
          <div key={item._id} className="found-item-card">
            {item.image && (
              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                className='item-image'
                alt={item.title}
                onError={(e) => e.target.style.display = 'none'}
              />
            )}
            <h4 className='item-title'>{item.title}</h4>
            <p className='item-location'>Found at: {item.location}</p>
            <p className='item-date'>Date: {item.date}</p>
            <p className='item-description'>{item.description}</p>
            <Link to={`/item-details/found/${item._id}`} className="details-button-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

