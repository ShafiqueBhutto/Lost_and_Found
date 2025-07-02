import React, { useEffect, useState } from "react";
import "./LostItems.css";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function LostItems() {
  const [allItems, setAllItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/lost-items");
        const data = await res.json();
        setAllItems(data);
      } catch (err) {
        console.error("Error fetching lost items:", err);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="lost-items-page">
      <h2 className="page-title">Lost Items</h2>
      <SearchBar searchItem={searchItem} onSearchChange={setSearchItem} />

      <div className="lost-items-container">
        {filteredItems.length === 0 ? (
          <p>No matching items found.</p>
        ) : (
          filteredItems.map((item) => (
            <div key={item._id} className="lost-item-card">
              {item.image && (
                <img
                  src={`http://localhost:5000/uploads/${item.image}`}
                  alt={item.title}
                  className="item-image"
                />
              )}
              <h4 className="item-title">{item.title}</h4>
              <p className="item-location">Lost at: {item.location}</p>
              <p className="item-date">Date: {item.date}</p>
              <p className="item-description">{item.description}</p>
              <Link to={`/item-details/lost/${item._id}`} className="details-button">
              {/* console.log("Fetched Items:", data); */}

                More Info
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

