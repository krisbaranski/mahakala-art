import React from 'react';

const SingleImpressum = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.id}</p>
    </div>
  );
};
export default SingleImpressum;
