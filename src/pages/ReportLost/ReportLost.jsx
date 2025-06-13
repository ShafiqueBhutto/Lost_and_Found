import React, { useState } from 'react'
import './ReportLost.css'

export default function ReportLost() {

  const [formData, setFormData] = useState({
    itemName: "",
    discription: "",
    location: "",
    date: "",
    image: null
  })

  const handleChange = (e) =>{
    const {name, value, type, files} = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      title: formData.itemName,
      discription: formData.discription,
      location: formData.location,
      date: formData.date,
      image: formData.image ? formData.image.name: ""
    }

    const oldItems = JSON.parse(localStorage.getItem("lostItems")) || [];

    oldItems.push(newItem);

    localStorage.setItem("lostItems", JSON.stringify(oldItems));

    alert("Lost item report submitted")
    setFormData({
      itemName: "",
      discription: "",
      location: "",
      date: "",
      image: null
    });
    e.target.reset();
  }
  

  return (
    <div className="report-lost-container">
      <h2 className='form-heading'>Report a Lost Item</h2>
      <form className='lost-form' onSubmit={handleSubmit}>
        {/* Input: 1 */}
        <div className="form-group">
          <label htmlFor="itemName">Item Name:</label>
          <input type="text" id='itemName' name="itemName" onChange={handleChange} required placeholder='Enter your Item Name'/>
        </div>

        {/* Input: 2 */}
        <div className="form-group">
          <label htmlFor="discription">Discription:</label>
          <textarea id="discription" name="discription" onChange={handleChange} required placeholder='Enter your Details'></textarea>
        </div>

        {/* Input: 3 */}
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id='location' name="location" onChange={handleChange} required placeholder='Enter your Location'/>
        </div>

        {/* Input: 4 */}
        <div className="form-group">
          <label htmlFor="date">Date Lost:</label>
          <input type="date" id="date" name="date" onChange={handleChange} required max={new Date().toISOString().split("T")[0]} />
        </div>

        {/* Input: 5 */}
        <div className="form-group">
          <label htmlFor="image">Upload Image (optional):</label>
          <input type="file" id="image" name="image" onChange={handleChange} accept="image/*" />
        </div>
        <button type="submit" className='submit-btn'>Submit Report</button>
      </form>
    </div>
  )
}
