import React, { useEffect, useState } from 'react';
import './ItemDetails.css';
import { useParams } from "react-router-dom";

export default function ItemDetails() {
  const { id, type } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/items/${type}`);
        const items = await response.json();
        const selectedItem = items.find((i) => i._id === id);
        setItem(selectedItem);
      } catch (err) {
        console.error("Error fetching item:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id, type]);

  if (loading) return <h2>Loading...</h2>;
  if (!item) return <h2>Item not found!</h2>;

  return (
    <div className="item-details-page">
      <img
        src={`http://localhost:5000/uploads/${item.image}`}
        alt={item.name}
        className='details-image'
      />
      <div className="details-info">
        <h4 className='details-title'>{item.name}</h4>
        <p className='details-location'>Location: {item.location}</p>
        <p className='details-date'>Date: {new Date(item.date).toLocaleDateString()}</p>
        <p className='details-description'>{item.description}</p>
      </div>
      <button className='back-button' onClick={() => window.history.back()}>Back</button>
    </div>
  );
}
