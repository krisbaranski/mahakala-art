import React from 'react';

const SinglePolicy = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.address}</p>
      <p>{props.id}</p>
    </div>
  );
};
export default SinglePolicy;
