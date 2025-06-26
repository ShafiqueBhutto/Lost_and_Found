import React, { useEffect, useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import About from '../AboutUS/About';

export default function Home() {
  const NavBtn = useNavigate();
  const [lostItems, setLostItems] = useState([])
  const [foundItems, setFoundItems] = useState([])

  useEffect(()=>{
    //for lost
    fetch("http://localhost:5000/api/items/lost")
    .then((res)=>res.json())
    .then((data)=>setLostItems(data.slice(-4).reverse()))
    .catch((err)=>console.error("Error fetching lost items:", err))

    //for found
    fetch("http://localhost:5000/api/items/found")
    .then((res)=>res.json())
    .then((data)=>setFoundItems(data.slice(-4).reverse()))
    .catch((err)=>console.error("Error fetching found items:", err))
  },[])

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
      <About/>
      {/* <section className="action-buttons">

        
      </section> */}
      {/* Recetenly lost item section */}
      <section className="preview-items">
        <h2>Recently Lost Items</h2>
        <div className="items-grid">
           {lostItems.map((item) => (
          <div className="item-card" key={item._id}>
          <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.name} />
          <h3>{item.name}</h3>
         <p>{item.description}</p>
        </div>
        ))}
      </div>
    </section>

    {/* Recently Found item section */}~
    <section className="preview-items">
        <h2>Recently Found Items</h2>
        <div className="items-grid">
           {foundItems.map((item) => (
          <div className="item-card" key={item._id}>
          <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.name} />
          <h3>{item.name}</h3>
         <p>{item.description}</p>
        </div>
        ))}
      </div>
    </section>
    </div>
  )
}
