import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/courousel.css'
const CarouselComponent = () => {
  return (
    <>
    <div className='bada'>
    <div className='corose'>
       
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20220528/pngtree-dark-and-edgy-web-design-idea-blog-in-a-grunge-room-photo-image_18294040.jpg"
              className="d-block w-100"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://firstsiteguide.com/wp-content/uploads/2021/04/TwoMonkeysTravel.jpg"
              className="d-block w-100"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://today.troy.edu/wp-content/uploads/2021/01/social-work-blog-post-artwork-01-1-scaled.jpg"
              className="d-block w-100"
              alt="third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://athemes.com/wp-content/uploads/the-fox-personal-blog-wordpress-theme-680x383.jpg"
              className="d-block w-100"
              alt="forth slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      </div>
    </>
  );
};

export default CarouselComponent;
