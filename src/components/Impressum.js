import React from 'react';
import SingleImpressum from './SingleImpressum';
import impressumData from '../data/impressumData';
import { motion } from 'framer-motion';

const Impressum = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1>Impressum</h1>
      <p style={{ marginBottom: '40px' }}>
        Krzysztof Baranski <br /> Charlottenburger Straße 30 <br /> 13086 Berlin
      </p>

      {impressumData.map(data => {
        return (
          <SingleImpressum
            title={data.title}
            content={data.content}
            key={data.id}
          />
        );
      })}
    </motion.div>
  );
};

export default Impressum;
