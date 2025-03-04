import './styles.css';
import React, { useState } from 'react';
import cabbage from './assets/image1.jpeg';
import mango from './assets/image2.jpeg';
import fig from './assets/image3.jpeg';
import gaze from './assets/image4.jpeg';
import peach from './assets/image5.jpeg';
import avocado from './assets/image6.jpeg';

const images = [fig, mango, cabbage, gaze, peach, avocado];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) => {
      // if (currentImage < length) {
      //   return currentImage + 1;
      // } else {
      //   return 0;
      // }

      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Zesty</h1>
        <h2>
          A photography project
          <br />
          by Ella Fieldling
        </h2>
      </div>

      <div className="img-container">
        <h3>
          {currentImage + 1} / {images.length}
        </h3>
        <img src={images[currentImage]} alt="fig" onClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
