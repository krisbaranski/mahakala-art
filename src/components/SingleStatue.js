const SingleStatue = props => {
  return (
    <div className="row">
      <p>{props.id}</p>
      <img src={props.image} alt="" className="col" />
      <section className="col">
        <h5>{props.title}</h5>
        <ul className="statue_info">
          <li>{props.statueDescription}</li>
          <li>{props.paintedBy}</li>
          <li>{props.heightAndYear}</li>
          <li>{props.location}</li>
        </ul>
      </section>
    </div>
  );
};
export default SingleStatue;
