import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import tempImage from '../assets/images/carousel.png';

function ControlledCarousel() {
  // Set up state to keep track of the active slide index
  const [index, setIndex] = useState(0);

  // Event handler for when a slide is selected
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* First slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tempImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tempImage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tempImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
