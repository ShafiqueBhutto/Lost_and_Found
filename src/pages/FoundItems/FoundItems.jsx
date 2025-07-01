// import './FoundItems.css'
// // import dummyData from '../../data/dummyData.js';
// import { Link } from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
// import SearchBar from '../../components/SearchBar/SearchBar';

// export default function FoundItems() {

//   const [allItems, setAllItems] = useState([]);
//   const [searchItem, setSearchItem] = useState('');

//   useEffect(()=>{
//     const staticItems = [
//       { id: 1, title: 'Laptop', location: 'ABI', date: '29-May-2025', description: 'Found Dell black laptop', image: "laptop.jpeg" },
//       { id: 2, title: 'Earbuds', location: 'ABII', date: '30-May-2025', description: 'Found M10 Black earbuds', image: "m10.jpeg" },
//       { id: 3, title: 'Glasses', location: 'CC', date: '01-March-2025', description: 'I found the Black sun glasses', image: "glasses.jpeg" },
//       { id: 4, title: 'Brown Watch', location: 'Cricket Ground', date: '01-March-2025', description: 'I found the brown watch', image: "brownwatch.jpeg" },
//     ];

//     const storedItems = JSON.parse(localStorage.getItem("foundItems")) || [];

//     const mergeAllitems = [...storedItems, ...staticItems];

//     setAllItems(mergeAllitems);
//   }, []);

//   const filteredItems = allItems.filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()))

//   return (
//     <div className="found-items-page">
//     <h2 className='page-title'>Found Items</h2>
//     <SearchBar searchItem={searchItem} onSearchChange={setSearchItem} />
//     <div className="found-items-container">

//       {/* card_1 */}
//       {/* <div className="found-item-card">
//         <img src="src/assets/foundItems/m10.jpeg" className='item-image' />
//         <h4 className='item-title'>Found M10 Earbuds</h4>
//         <p className='item-location'>Found at: Inside library</p>
//         <p className='item-date'>Date: 2-November-2024</p>
//         <p className='item-discription'>I found the M10 earbuds in Library infront of PC table</p>
//         <button className='details-button'>View Details</button>
//       </div> */}

//       {/* card_2 */}
//       {/* <div className="lost-item-card">
//         <img src="src/assets/foundItems/glasses.jpeg" className='item-image' />
//         <h4 className='item-title'>Found glasses</h4>
//         <p className='item-location'>Found at: In CC</p>
//         <p className='item-date'>Date: 9-April-2025</p>
//         <p className='item-discription'>Found the black color glasses in cc</p>
//         <button className='details-button'>View Details</button>
//       </div> */}

//       {/* card_3 */}
//       {/* <div className="lost-item-card">
//         <img src="src/assets/foundItems/brownwatch.jpeg" className='item-image' />
//         <h4 className='item-title'>Brown Watch</h4>
//         <p className='item-location'>Found at: Old cafetaria</p>
//         <p className='item-date'>Date: 20-Feb-2025</p>
//         <p className='item-discription'>Found the brown watch in Old cafetaria</p>
//         <button className='details-button'>View Details</button>
//       </div> */}

//       {/* card_4 */}
//       {/* <div className="lost-item-card">
//         <img src="src/assets/foundItems/laptop.jpeg" className='item-image' />
//         <h4 className='item-title'>Laptop</h4>
//         <p className='item-location'>Found at: ABI</p>
//         <p className='item-date'>Date: 29-May-2025</p>
//         <p className='item-discription'>Found the Dell black color laptop in ABI in room 17</p>
//         <button className='details-button'>View Details</button>
//       </div> */}
//        {/* Dynamic Cards: from dummyData */}
//        {filteredItems.map(item => (
//           <div key={item.id + item.title} className="found-item-card">
//             <img
//               src={typeof item.image === 'string' ? `/foundItems/${item.image}`
//               : URL.createObjectURL(item.image)}
//               className='item-image'
//               alt={item.title}
//               onError={(e) => e.target.style.display = 'none'} // hides image if not found
//             />
//             <h4 className='item-title'>{item.title}</h4>
//             <p className='item-location'>Found at: {item.location}</p>
//             <p className='item-date'>Date: {item.date}</p>
//             <p className='item-discription'>{item.description}</p>
//             <Link to={`/item-details/found/${item.id}`} className="details-button-link">
//               View Details
//             </Link>
//           </div>
//         ))}
//     </div>
//   </div>
//   )
// }


import './FoundItems.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from 'axios';

export default function FoundItems() {
  const [allItems, setAllItems] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    // ✅ Fetch from your backend
    const fetchItems = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/found');
        // console.log(res.data);
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
            <p className='item-discription'>{item.description}</p>
            <Link to={`/item-details/found/${item._id}`} className="details-button-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
