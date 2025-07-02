import React, { useState } from 'react';
import './ReportLost.css';

export default function ReportLost() {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    location: '',
    date: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.itemName);
    data.append('description', formData.description);
    data.append('location', formData.location);
    data.append('date', formData.date);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      const res = await fetch('http://localhost:5000/api/lost-items', {
        method: 'POST',
        body: data,
      });

      if (!res.ok) {
        throw new Error('Failed to submit lost item report');
      }

      const result = await res.json();
      alert('Lost item reported successfully!');
      console.log(result);

      // Reset form
      setFormData({
        itemName: '',
        description: '',
        location: '',
        date: '',
        image: null,
      });

      e.target.reset();
    } catch (error) {
      console.error('Error submitting lost item:', error);
      alert('Failed to submit report. Please try again.');
    }
  };

  return (
    <div className="report-lost-container">
      <h2 className="form-heading">Report a Lost Item</h2>
      <form className="lost-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={handleChange}
            required
            placeholder="Enter your Item Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            required
            placeholder="Enter item details"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={handleChange}
            required
            placeholder="Enter your Location"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date Lost:</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            required
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image (optional):</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Report
        </button>
      </form>
    </div>
  );
}
