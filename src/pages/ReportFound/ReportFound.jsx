import React, {useState} from 'react'
import './ReportFound.css'
import Swal from 'sweetalert2';
import { reportItem } from '../../api/itemApi';


export default function ReportFound() {

  const [formData, setFormData] = useState({
    itemName: "",
    foundDate: "",
    foundLocation: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("type", "found");
  data.append("name", formData.itemName);
  data.append("description", formData.description);
  data.append("location", formData.foundLocation);
  data.append("date", formData.foundDate);
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
      text: 'Found item reported successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    setFormData({
      itemName: "",
      foundDate: "",
      foundLocation: "",
      description: "",
      image: null
    });
    e.target.reset();
  } catch (err) {
    Swal.fire({
      title: 'Error!',
      text: 'Failed to report found item.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
    console.error(err);
  }
};


  return (
    <div className="report-found-container">
      <h2 className="form-title">Report Found Item</h2>
      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-group">
          <label htmlFor='itemName'>Item Name</label>
          <input
            type="text"
            id='itemName'
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            placeholder='Enter your Item Name'
            required
          />
        </div>

        <div className="form-group">
        <label htmlFor='description'>Description</label>
          <textarea
            name="description"
            id='description'
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder='Enter your Description'
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor='FoundLocation'>Found Location</label>
          <input
            type="text"
            id='FoundLocation'
            name="foundLocation"
            value={formData.foundLocation}
            onChange={handleChange}
            placeholder='Enter Found Location'
            required
          />
        </div>

        <div className="form-group">
        <label htmlFor='FoundDate'>Found Date</label>
          <input
            type="date"
            id='FoundDate'
            name="foundDate"
            value={formData.foundDate}
            onChange={handleChange}
            placeholder='Enter your Found Date'
            required
            max={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div className="form-group">
          <label htmlFor='UploadImage'>Upload Image</label>
          <input
            type="file"
            id='UploadImage'
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Found Report
        </button>
      </form>
    </div>
  )
}
