import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ID.css'; // Make sure you have a CSS file for custom styles
import { AiFillDelete } from 'react-icons/ai'; // Import a delete icon
import Navbar from './navbar.jsx';

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const fetchBlogPost = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/read/${id}`);
      const newData = await response.json();
      setData(newData.data);
    } catch (error) {
      console.log("Error fetching blog post:", error);
    }
  };

  useEffect(() => {
    fetchBlogPost();
  }, [id]);

  return (
    <>
    <Navbar/>
    <div className="blog-details">
      <h1 className="title">{data.name}</h1>
      <div className="content-wrapper">
        <img src={data.image} alt={data.name} className="blog-image" />
        <div className="description">
          <p>{data.description}</p>
        </div>
      </div>
      <p className="author2">Author: {data.author}</p>
    </div>
    </>
  );
};

export default BlogDetails;
