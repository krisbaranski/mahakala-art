const SingleStatue = props => {
  return (
    <div className="row">
      <img src={props.image} alt="" className="col" />
      <element className="col">
        <h5>{props.title}</h5>
        <ul className="statue_info">
          <li className="statueDescription">{props.statueDescription}</li>
          <li className="painted_by">{props.paintedBy}</li>
          <li className="height_year">{props.heightAndYear}</li>
          <li className="location">{props.location}</li>
        </ul>
      </element>
    </div>
  );
};
export default SingleStatue;
