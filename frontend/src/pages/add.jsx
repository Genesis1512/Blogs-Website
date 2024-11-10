import React, { useState } from 'react';
import '../styles/Add.css'; // Import your CSS file
import Navbar from './navbar.jsx'; // Import your Navbar component

const Add = () => {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    description: '',
    image: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/api/blog/add", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the correct form data
      });

      if (!response.ok) {
        const errorText = await response.text(); // Read the response text
        console.error('Error response:', errorText); // Log error response
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Success:', result); // Log success response
      
      // Clear the form fields
      setFormData({
        name: '',
        author: '',
        description: '',
        image: '',
      });

      // Show success message
      setSuccessMessage('Blog added successfully!');

      // Optionally, hide the success message after a few seconds
      setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
    } catch (error) {
      console.error('Error:', error); // Log error
    }
  };

  return (
    <div className='back'>
      <Navbar /> 
      <div className="prod-container">
        <h2>Add a Blog Post</h2>
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
        <form onSubmit={handleSubmit} className="prod-form">
          <div className="form-group">
            <label htmlFor="name">Blog Title:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author Name:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
    
          
          </div>
          <button type="submit5">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
