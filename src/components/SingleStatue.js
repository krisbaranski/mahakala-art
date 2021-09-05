const SingleStatue = props => {
  return (
    <div className="row">
      <img src={props.image} alt="" className="col" />
      <element className="col">
        <h5>{props.title}</h5>
        <ul className="statue_info">
          <li>{props.statueDescription}</li>
          <li>{props.paintedBy}</li>
          <li>{props.heightAndYear}</li>
          <li>{props.location}</li>
        </ul>
      </element>
    </div>
  );
};
export default SingleStatue;
