import React, { useState } from 'react'
import './ReportLost.css'
import Swal from 'sweetalert2'
import { reportItem } from '../../api/itemApi'

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append("type", "lost");
    data.append("name", formData.itemName);
    data.append("description", formData.discription); // spelling matched
    data.append("location", formData.location);       // fixed
    data.append("date", formData.date);               // fixed
    if (formData.image) {
      data.append("image", formData.image);
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        body: data
      });
  
      if (!response.ok) throw new Error("Failed");
  
      Swal.fire({
        title: 'Success!',
        text: 'Lost item reported successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
  
      setFormData({
        itemName: "",
        discription: "",
        location: "",
        date: "",
        image: null
      });
      e.target.reset();
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to report lost item.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error(err);
    }
  };
    
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
