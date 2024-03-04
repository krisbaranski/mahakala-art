import React, { useEffect, useState, useCallback } from 'react';
import '../index.css';

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onLoad = useCallback(
    () => setCurrentIndex(slide => (slide + 1) % 5),
    []
  );
  useEffect(() => {
    const interval = setInterval(onLoad, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [onLoad]);

  const slideStyles = {
    aspectRatio: '1/1',
    maxWidth: '700px',
    borderRadius: '4px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div onLoad={onLoad} style={slideStyles} className="FadeInAndOut"></div>
  );
};

export default Slideshow;
