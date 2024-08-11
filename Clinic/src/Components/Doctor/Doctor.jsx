import React, { useState } from 'react';

function Doctor() {
  // Array of image paths
  const images = [
    '/dist/assets/images/doctor.png',
    '/dist/assets/images/entry.png',
    '/dist/assets/images/entry2.png',
    '/dist/assets/images/entry3.png',
    '/dist/assets/images/reception.png',
  ];

  // State for managing the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Function to go to the next slide
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mt-6 mb-8 p-10 ">
      
      {/* Carousel wrapper */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Render each image in the array */}
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                className="w-full h-screen md:h-screen object-cover p-10 " style={{borderRadius: '100px'}}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider controls */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white/30 text-black hover:bg-white/50 focus:outline-none"
        onClick={handlePrevSlide}
      >
        &#9664; {/* Left arrow */}
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white/30 text-black hover:bg-white/50 focus:outline-none"
        onClick={handleNextSlide}
      >
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
}

export default Doctor;
