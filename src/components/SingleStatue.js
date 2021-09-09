import React from 'react';

const SingleStatue = props => {
  return (
    <div className="row">
      <img src={props.image} alt="" className="col" />
      <section className="col">
        <ul className="statue_info">
          <h5>{props.title}</h5>
          <li>{props.statueDescription}</li>
          <li>{props.paintedBy}</li>
          <li>{props.heightAndYear}</li>
          <li>{props.location}</li>
          <li>{props.id}</li>
        </ul>
      </section>
    </div>
  );
};
export default SingleStatue;
