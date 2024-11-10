import { AiFillDelete } from 'react-icons/ai'; // Import a delete icon
import Navbar from './navbar.jsx';
import React, { useEffect, useState } from 'react';
import '../styles/blogs.css';
import { useNavigate } from 'react-router-dom';

const BigBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blog/read');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setBlogs(result.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleRedirect = (id) => {
    navigate(`/blog/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/read/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBlogs(blogs.filter(blog => blog._id !== id));
      } else {
        console.error('Failed to delete, status:', response.status);
      }
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="back">
      <Navbar />
      <div className="blog-list">
        <h2>All Blog Posts</h2>
        <ul>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <li key={blog._id} className="blog-item">
                <div className="blog-content">
                  <img src={blog.image} alt={blog.name} className="blog-image" />
                  <div className="blog-text">
                    <h3>{blog.name}</h3>
                    <span className="author">by {blog.author}</span>
                    <p>{blog.description.slice(0, 50)}...</p>
                    <button className="read-more" onClick={() => handleRedirect(blog._id)}>
                      Read More
                    </button>
                  </div>
                  <button className="delete-btn" onClick={() => handleDelete(blog._id)}>
                    <AiFillDelete style={{ color: '#fff' }} /> {/* White icon */}
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="no-posts">No blog posts available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BigBlog;
