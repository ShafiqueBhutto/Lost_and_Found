// import React from 'react'
// import './Home.css'
// import lostItems from '../../data/lostItems'; 
// import { useNavigate } from 'react-router-dom';


// export default function Home() {
//   const NavBtn = useNavigate();

//   return (
//     <div className="home-container">
//       <section className='hero-banner'>
//       <h1>Welcome to the Lost & Found Portal</h1>
//       <p>Report or find lost items within your campus easily and quickly.</p>
//       <div className="action-buttons">
//         <button className="btn lost" onClick={()=>NavBtn('/report-lost')}>Report Lost Item</button>
//         <button className="btn found" onClick={()=>NavBtn('/report-found')}>Report Found Item</button>
//       </div>
//       </section>
//       {/* <section className="action-buttons">
        
//       </section> */}
//       <section className="preview-items">
//         <h2>Recently Lost Items</h2>
//         <div className="items-grid">
//            {lostItems.map((item) => (
//           <div className="item-card" key={item.id}>
//           <img src={`/LostItems/${item.image}`} alt={item.name} />
//           <h3>{item.title}</h3>
//          <p>{item.description}</p>
//         </div>
//         ))}
//      </div>
//       </section>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const NavBtn = useNavigate();
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/lost-items');
        setLostItems(response.data);
      } catch (error) {
        console.error('Error fetching lost items:', error);
      }
    };

    fetchLostItems();
  }, []);

  return (
    <div className="home-container">
      <section className='hero-banner'>
        <h1>Welcome to the Lost & Found Portal</h1>
        <p>Report or find lost items within your campus easily and quickly.</p>
        <div className="action-buttons">
          <button className="btn lost" onClick={() => NavBtn('/report-lost')}>Report Lost Item</button>
          <button className="btn found" onClick={() => NavBtn('/report-found')}>Report Found Item</button>
        </div>
      </section>

      <section className="preview-items">
        <h2>Recently Lost Items</h2>
        <div className="items-grid">
          {lostItems.length === 0 ? (
            <p>No lost items reported yet.</p>
          ) : (
            lostItems.slice(0, 6).map((item) => (
              <div className="item-card" key={item._id}>
                {item.image && (
                  <img
                    src={`http://localhost:5000/uploads/${item.image}`}
                    alt={item.title}
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                )}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
