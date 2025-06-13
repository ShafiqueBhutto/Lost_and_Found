import React from 'react'
import './Home.css'
import lostItems from '../../data/lostItems'; 
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const NavBtn = useNavigate();

  return (
    <div className="home-container">
      <section className='hero-banner'>
      <h1>Welcome to the Lost & Found Portal</h1>
      <p>Report or find lost items within your campus easily and quickly.</p>
      <div className="action-buttons">
        <button className="btn lost" onClick={()=>NavBtn('/report-lost')}>Report Lost Item</button>
        <button className="btn found" onClick={()=>NavBtn('/report-found')}>Report Found Item</button>
      </div>
      </section>
      {/* <section className="action-buttons">
        
      </section> */}
      <section className="preview-items">
        <h2>Recently Lost Items</h2>
        <div className="items-grid">
           {lostItems.map((item) => (
          <div className="item-card" key={item.id}>
          <img src={`/LostItems/${item.image}`} alt={item.name} />
          <h3>{item.title}</h3>
         <p>{item.description}</p>
        </div>
        ))}
     </div>
      </section>
    </div>
  )
}
