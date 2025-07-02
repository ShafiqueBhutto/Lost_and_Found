// // import React, {useState} from 'react'
// // import './ReportFound.css'

// // export default function ReportFound() {

// //   const [formData, setFormData] = useState({
// //     itemName: "",
// //     foundDate: "",
// //     foundLocation: "",
// //     description: "",
// //     image: null,
// //   });

// //   const handleChange = (e) => {
// //     const { name, value, files } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: files ? files[0] : value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const newItem = {
// //       id: Date.now(),
// //       title: formData.itemName,
// //       description: formData.description,
// //       location: formData.foundLocation,
// //       date: formData.foundDate,
// //       image: formData.image ? formData.image.name: ""
// //     }

// //     const oldItems = JSON.parse(localStorage.getItem("foundItems")) || [];

// //     oldItems.push(newItem);

// //     localStorage.setItem("foundItems", JSON.stringify(oldItems));

// //     alert("Found item reported successfully!");
// //     //clear form
// //     setFormData({
// //       itemName: "",
// //       foundDate: "",
// //       foundLocation: "",
// //       description: "",
// //       image: null,
// //     });
// //   };

// //   return (
// //     <div className="report-found-container">
// //       <h2 className="form-title">Report Found Item</h2>
// //       <form onSubmit={handleSubmit} className="report-form">
// //         <div className="form-group">
// //           <label htmlFor='itemName'>Item Name</label>
// //           <input
// //             type="text"
// //             id='itemName'
// //             name="itemName"
// //             value={formData.itemName}
// //             onChange={handleChange}
// //             placeholder='Enter your Item Name'
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //         <label htmlFor='description'>Description</label>
// //           <textarea
// //             name="description"
// //             id='description'
// //             value={formData.description}
// //             onChange={handleChange}
// //             rows="4"
// //             placeholder='Enter your Description'
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor='FoundLocation'>Found Location</label>
// //           <input
// //             type="text"
// //             id='FoundLocation'
// //             name="foundLocation"
// //             value={formData.foundLocation}
// //             onChange={handleChange}
// //             placeholder='Enter Found Location'
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //         <label htmlFor='FoundDate'>Found Date</label>
// //           <input
// //             type="date"
// //             id='FoundDate'
// //             name="foundDate"
// //             value={formData.foundDate}
// //             onChange={handleChange}
// //             placeholder='Enter your Found Date'
// //             required
// //             max={new Date().toISOString().split("T")[0]}
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor='UploadImage'>Upload Image</label>
// //           <input
// //             type="file"
// //             id='UploadImage'
// //             name="image"
// //             accept="image/*"
// //             onChange={handleChange}
// //           />
// //         </div>

// //         <button type="submit" className="submit-btn">
// //           Submit Found Report
// //         </button>
// //       </form>
// //     </div>
// //   )
// // }


// import React, { useState } from 'react';
// import './ReportFound.css';
// import Swal from 'sweetalert2';

// export default function ReportFound() {
//   const [formData, setFormData] = useState({
//     itemName: '',
//     foundDate: '',
//     foundLocation: '',
//     description: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formPayload = new FormData();
//     formPayload.append('itemName', formData.itemName);
//     formPayload.append('description', formData.description);
//     formPayload.append('foundLocation', formData.foundLocation);
//     formPayload.append('foundDate', formData.foundDate);
//     if (formData.image) {
//       formPayload.append('image', formData.image);
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/found', {
//         method: 'POST',
//         body: formPayload,
//       });

//       if (response.ok) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Success!',
//           text: 'Found item reported successfully!',
//         });

//         setFormData({
//           itemName: '',
//           foundDate: '',
//           foundLocation: '',
//           description: '',
//           image: null,
//         });
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Error',
//           text: 'Something went wrong while submitting the form.',
//         });
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Network Error',
//         text: 'Failed to reach the server.',
//       });
//     }
//   };

//   return (
//     <div className="report-found-container">
//       <h2 className="form-title">Report Found Item</h2>
//       <form onSubmit={handleSubmit} className="report-form">
//         <div className="form-group">
//           <label htmlFor="itemName">Item Name</label>
//           <input
//             type="text"
//             id="itemName"
//             name="itemName"
//             value={formData.itemName}
//             onChange={handleChange}
//             placeholder="Enter your Item Name"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             name="description"
//             id="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="4"
//             placeholder="Enter your Description"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="foundLocation">Found Location</label>
//           <input
//             type="text"
//             id="foundLocation"
//             name="foundLocation"
//             value={formData.foundLocation}
//             onChange={handleChange}
//             placeholder="Enter Found Location"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="foundDate">Found Date</label>
//           <input
//             type="date"
//             id="foundDate"
//             name="foundDate"
//             value={formData.foundDate}
//             onChange={handleChange}
//             required
//             max={new Date().toISOString().split('T')[0]}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="image">Upload Image</label>
//           <input
//             type="file"
//             id="image"
//             name="image"
//             accept="image/*"
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="submit-btn">
//           Submit Found Report
//         </button>
//       </form>
//     </div>
//   );
// }

// import axios from 'axios';

// const handleSubmit = async (e) => {
// e.preventDefault();

// const form = new FormData();
// form.append("title", formData.itemName);
// form.append("description", formData.description);
// form.append("location", formData.foundLocation);
// form.append("date", formData.foundDate);
// if (formData.image) {
// form.append("image", formData.image);
// }

// try {
// await axios.post("http://localhost:5000/api/found", form, {
// headers: {
// "Content-Type": "multipart/form-data",
// },
// });

// console.log("Form submitted successfully");
// alert("Found item reported and saved to database!");
// setFormData({
//   itemName: "",
//   foundDate: "",
//   foundLocation: "",
//   description: "",
//   image: null,
// });
// } catch (error) {
// console.error("Error submitting found item:", error);
// alert("Failed to submit found item.");
// }
// };

// import React, { useState } from 'react';
// import axios from 'axios';

// export default function ReportFound() {
//   const [formData, setFormData] = useState({
//     itemName: '',
//     foundDate: '',
//     foundLocation: '',
//     description: '',
//     image: null,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = new FormData();
//     form.append("title", formData.itemName);
//     form.append("description", formData.description);
//     form.append("location", formData.foundLocation);
//     form.append("date", formData.foundDate);
//     if (formData.image) {
//       form.append("image", formData.image);
//     }

//     try {
//       await axios.post("http://localhost:5000/api/found", form, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       console.log("Form submitted successfully");
//       alert("Found item reported and saved to database!");

//       setFormData({
//         itemName: "",
//         foundDate: "",
//         foundLocation: "",
//         description: "",
//         image: null,
//       });

//     } catch (error) {
//       console.error("Error submitting found item:", error);
//       alert("Failed to submit found item.");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   return (
//     <div>
//       <h2>Report Found Item</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="itemName"
//           placeholder="Item Name"
//           value={formData.itemName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="date"
//           name="foundDate"
//           value={formData.foundDate}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="foundLocation"
//           placeholder="Found Location"
//           value={formData.foundLocation}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="file"
//           name="image"
//           accept="image/*"
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

//------------------------------------------------
// import React, { useState } from 'react';
// import './ReportFound.css';
// import axios from 'axios';

// export default function ReportFound() {
//   const [formData, setFormData] = useState({
//     itemName: "",
//     foundDate: "",
//     foundLocation: "",
//     description: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = new FormData();
//     form.append("title", formData.itemName);
//     form.append("description", formData.description);
//     form.append("location", formData.foundLocation);
//     form.append("date", formData.foundDate);
//     if (formData.image) {
//       form.append("image", formData.image);
//     }

//     try {
//       await axios.post("http://localhost:5000/api/found", form, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       alert("Found item reported and saved to database!");
//       setFormData({
//         itemName: "",
//         foundDate: "",
//         foundLocation: "",
//         description: "",
//         image: null,
//       });
//     } catch (error) {
//       console.error("Error submitting found item:", error);
//       alert("Failed to submit found item.");
//     }
//   };

//   return (
//     <div className="page-content">
//       <div className="report-found-container">
//         <h2 className="form-title">Report Found Item</h2>
//         <form onSubmit={handleSubmit} className="report-form">
//           <div className="form-group">
//             <label htmlFor="itemName">Item Name</label>
//             <input
//               type="text"
//               id="itemName"
//               name="itemName"
//               value={formData.itemName}
//               onChange={handleChange}
//               placeholder="Enter your Item Name"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <textarea
//               name="description"
//               id="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="4"
//               placeholder="Enter your Description"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="foundLocation">Found Location</label>
//             <input
//               type="text"
//               id="foundLocation"
//               name="foundLocation"
//               value={formData.foundLocation}
//               onChange={handleChange}
//               placeholder="Enter Found Location"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="foundDate">Found Date</label>
//             <input
//               type="date"
//               id="foundDate"
//               name="foundDate"
//               value={formData.foundDate}
//               onChange={handleChange}
//               required
//               max={new Date().toISOString().split("T")[0]}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="image">Upload Image</label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit" className="submit-btn">
//             Submit Found Report
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



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

