import React from 'react';
import SingleStatue from './SingleStatue';
import statueData from '../data/statueData';
import { motion } from 'framer-motion';

const Statues = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1>
        Statues
        <p>
          Here are presented statue projects that i realised for buddhist
          Centres and collectors worldwide:
        </p>
      </h1>

      {statueData
        .map(statue => {
          return (
            <SingleStatue
              key={statue.id}
              image={statue.image}
              title={statue.title}
              statueDescription={statue.statueDescription}
              paintedBy={statue.paintedBy}
              heightAndYear={statue.heightAndYear}
              location={statue.location}
            />
          );
        })
        .reverse()}
    </motion.div>
  );
};

export default Statues;
