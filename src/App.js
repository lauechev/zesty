import './styles.css';
import React, { useState } from 'react';
import cabbage from './assets/image1.jpeg';
import mango from './assets/image2.jpeg';
import fig from './assets/image3.jpeg';
import gaze from './assets/image4.jpeg';
import peach from './assets/image5.jpeg';
import avocado from './assets/image6.jpeg';

const images = [fig, mango, cabbage, gaze, peach, avocado];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded"> loading images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

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

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project
          <br />
          by Ella Fieldling
        </h2>
      </header>

      <figure>
        {numLoaded < images.length && <Loading calculatedWidth={(numLoaded / images.length) * 100} />}
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>

        {images.map((imageURL, index) => (
          <img
            src={imageURL}
            key={imageURL}
            alt="fig"
            onClick={handleClick}
            onLoad={handleImageLoad}
            // style={{ opacity: currentImage === index ? 1 : 0 }}
            className={currentImage === index ? 'display' : 'hide'}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
