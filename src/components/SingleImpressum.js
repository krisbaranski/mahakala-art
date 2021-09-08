import React from 'react';

const SingleImpressum = props => {
  return (
    <div>
      <h5>{props.title}</h5>
      <p>{props.content}</p>
      <p>{props.id}</p>
    </div>
  );
};
export default SingleImpressum;
