import React from 'react';
import SinglePolicy from './SinglePolicy';
import policyData from '../data/policyData';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1>
        Datenschutzerklärung
        <p>Allgemeiner Hinweis und Pflichtinformationen:</p>
      </h1>

      {policyData.map(policy => {
        return (
          <SinglePolicy
            title={policy.title}
            content={policy.content}
            address={policy.address}
            key={policy.id}
          />
        );
      })}
    </motion.div>
  );
};

export default PrivacyPolicy;
