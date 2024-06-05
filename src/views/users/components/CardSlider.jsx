import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './CardSlider.css'; 

const CardSlider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={goToPrevious}><FaArrowLeft /></button>
      <div className="slider-wrapper">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {children.map((child, index) => (
            <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <button className="slider-button next" onClick={goToNext}><FaArrowRight /></button>
    </div>
  );
};

export default CardSlider;
