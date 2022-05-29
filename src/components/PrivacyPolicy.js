import React from 'react';
import SinglePolicy from './SinglePolicy';
import policyData from '../data/policyData';

const PrivacyPolicy = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default PrivacyPolicy;
