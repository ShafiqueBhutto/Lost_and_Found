import React, { useState } from 'react';
import './ReportFound.css';
import axios from 'axios';

export default function ReportFound() {
  const [formData, setFormData] = useState({
    title: '',
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

    const formPayload = new FormData();
    formPayload.append('title', formData.title);
    formPayload.append('description', formData.description);
    formPayload.append('location', formData.location);
    formPayload.append('date', formData.date);
    if (formData.image) {
      formPayload.append('image', formData.image);
    }

    try {
      const res = await axios.post('http://localhost:5000/api/found-items', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Found item report submitted successfully!');
      setFormData({
        title: '',
        description: '',
        location: '',
        date: '',
        image: null,
      });

      e.target.reset(); // reset form UI
    } catch (error) {
      console.error('Error submitting found item:', error);
      alert('Something went wrong while submitting the report.');
    }
  };

  return (
    <div className="report-found-container">
      <h2 className="form-heading">Report a Found Item</h2>
      <form className="found-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="title">Item Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Enter Item Name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            required
            placeholder="Enter Description"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="location">Found Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            required
            placeholder="Enter Location"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date Found:</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            max={new Date().toISOString().split('T')[0]}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image (optional):</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Report
        </button>
      </form>
    </div>
  );
}

