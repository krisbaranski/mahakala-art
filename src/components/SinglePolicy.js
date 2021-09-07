const SinglePolicy = props => {
  return (
    <div>
      <h5>{props.title}</h5>
      <p>{props.content}</p>
      <p>{props.address}</p>
      <p>{props.id}</p>
    </div>
  );
};
export default SinglePolicy;
