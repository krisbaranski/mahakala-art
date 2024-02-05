import React, { useEffect, useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
// import { motion } from 'framer-motion';
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

  const transitions = useTransition(currentIndex, p => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const sliderStyles = {
    // width: '100%',
    // height: 'auto',
    // margin: '0 auto',
  };

  const slideStyles = {
    aspectRatio: '1/1',
    maxWidth: '700px',
    borderRadius: '4px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
    transform: 'transitions',
  };

  return (
    <div style={{ sliderStyles, transitions }} onLoad={onLoad}>
      <animated.div style={slideStyles}></animated.div>
    </div>
  );
};

export default Slideshow;
