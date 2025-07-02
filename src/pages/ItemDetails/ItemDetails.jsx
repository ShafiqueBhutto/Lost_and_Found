import React from 'react'
import './ItemDetails.css'
import { useParams } from "react-router-dom";
import foundItems from '../../data/dummyData'; 
import lostItems from '../../data/lostItems';

export default function ItemDetails() {
  const { id, type } = useParams();

  const dataSource = type === 'found' ? JSON.parse(localStorage.getItem('foundItems')) : JSON.parse(localStorage.getItem('lostItems'));
 
  
  const item = dataSource.find((item) => item.id === parseInt(id));


  if (!item) {
    return <h2>Item not found!</h2>;
  }


  return (
    <div className="item-details-page">
      <img src={`/${type === 'found' ? 'foundItems' : 'LostItems'}/${item.image}`} alt={item.title} className='details-image' />
      <div className="details-info">
        <h4 className='details-title'>{item.title}</h4>
        <p className='details-location'>Found at: {item.location}</p>
        <p className='details-date'>Date: {item.date}</p>
        <p className='details-description'>{item.description}</p>
      </div>
      <button className='back-button' onClick={()=>window.history.back()}>Back</button>
    </div>
  )
}
