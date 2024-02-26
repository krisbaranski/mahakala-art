import React, { useEffect, useState, useCallback } from 'react';
// import { animated } from 'react-spring';
import { motion } from 'framer-motion';
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

  // const transitions = useTransition(currentIndex, p => p, {
  //   initial: ' opacity: 0',
  //   animate: 'opacity: 1',
  //   exit: 'opacity: 0, transition: { duration: 1 }',
  // });

  // const sliderStyles = {};

  const slideStyles = {
    aspectRatio: '1/1',
    maxWidth: '700px',
    borderRadius: '4px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
    // transform: 'transitions',
  };

  return <motion.section onLoad={onLoad} style={slideStyles}></motion.section>;
};

export default Slideshow;
