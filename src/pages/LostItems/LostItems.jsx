import React, { useEffect, useState } from 'react'
import './LostItems.css'
// import lostitems from '../../data/lostItems.js';
import { Link } from "react-router-dom";
import SearchBar from '../../components/SearchBar/SearchBar';



export default function LostItems() {
 
  const [allItems, setAllItems] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(()=>{

    const getLostItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/items/lost");
        const data = await response.json();
        console.log("Fetched lost items:", data); // <-- Add this
        setAllItems(data);
      } catch (error) {
        console.error("Failed to fetch Lost Items: ", error);
      }
    };
    getLostItems();

    // const staticItems = [
    //   {
    //     id: 5,
    //     title: "PM Bag",
    //     location: "AB III Room 211",
    //     date: "30-June-2024",
    //     description: "I lost the my PM Bag.",
    //     image: "PMBag.jpg"
    //   },
    //   {
    //     id: 6,
    //     title: "Water Bottle",
    //     location: "AB III Room 211",
    //     date: "21-Feb-2024",
    //     description: "I lost the my green steel water bottle",
    //     image: "waterbottle.jpg"
    //   },
    //   {
    //     id: 7,
    //     title: "Laptop Charger",
    //     location: "Library",
    //     date: "11-March-2025",
    //     description: "I lost the my HP laptop charger in library infront of PC table",
    //     image: "charger.jpg"
    //   },
    //   {
    //     id: 8,
    //     title: "Earbuds",
    //     location: "CC",
    //     date: "15-April-2025",
    //     description: "I lost the my Ronin black color earbuds at lunch time in CC.",
    //     image: "ronin.jpg"
    //   },
    // ];

    // const storedItems = JSON.parse(localStorage.getItem("lostItems")) || [];

    // const mergeAllitems = [...storedItems, ...staticItems];

    // setAllItems(mergeAllitems);
  }, []);

  const filteredItems = allItems.filter(item => {
    if (!searchItem) return true;
    return typeof item.name === 'string' && item.name.toLowerCase().includes(searchItem.toLowerCase());
  });
  
  

  return (
    
    <div className="lost-items-page">
      <h2 className='page-title'>Lost Items</h2>
      <SearchBar searchItem={searchItem} onSearchChange={setSearchItem} />
      <div className="lost-items-container">

        {/* card_1
        <div className="lost-item-card">
          <img src="src/assets/LostItems/PMBag.jpg" className='item-image' />
          <h4 className='item-title'>Lost PM Bag</h4>
          <p className='item-location'>ABII Room 211</p>
          <p className='item-date'>Reported: 2-May-2025</p>
          <p className='item-discription'>Prime Minister Laptop Bag</p>
          <button className='details-button'>More Info</button>
        </div> */}

        {/* card_2 */}
        {/* <div className="lost-item-card">
          <img src="src/assets/LostItems/waterbottle.jpg" className='item-image' />
          <h4 className='item-title'>Lost Water Bottle</h4>
          <p className='item-location'>Outside ABI</p>
          <p className='item-date'>Reported: 17-April-2025</p>
          <p className='item-discription'>Plastic white color and Rabbit Logo</p>
          <button className='details-button'>More Info</button>
        </div> */}

        {/* card_3 */}
        {/* <div className="lost-item-card">
          <img src="src/assets/LostItems/charger.jpg" className='item-image' />
          <h4 className='item-title'>Lost Laptop Charger</h4>
          <p className='item-location'>Library</p>
          <p className='item-date'>Reported: 28-April-2025</p>
          <p className='item-discription'>Lost HP laptop charger in library shelf side chairs in the right side</p>
          <button className='details-button'>More Info</button>
        </div> */}

        {/* card_4 */}
        {/* <div className="lost-item-card">
          <img src="src/assets/LostItems/ronin.jpg" className='item-image' />
          <h4 className='item-title'>Lost earbuds</h4>
          <p className='item-location'>CC</p>
          <p className='item-date'>Reported: 8-June-2025</p>
          <p className='item-discription'>Lost the white color earbuds of Ronin company</p>
          <button className='details-button'>More Info</button>
        </div> */}

        {filteredItems.map(item => (
          <div key={item._id + item.name} className="lost-item-card">
            <img
              src={`/LostItems/${item.image}`}
              className='item-image'
              alt={item.name || 'lost item'}
              onError={(e) => e.target.style.display = 'none'}
            />
            <h4 className='item-title'>{item.name}</h4>
            <p className='item-location'>Lost at: {item.location}</p>
            <p className='item-date'>Date: {new Date(item.date).toISOString().slice(0, 10).split('-').reverse().join('-')}</p>
            <p className='item-discription'>{item.description}</p>
            <Link to={`/item-details/lost/${item._id}`} className="details-button-link">
              More Info
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
