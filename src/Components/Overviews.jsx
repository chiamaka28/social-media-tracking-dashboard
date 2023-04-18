const Overviews = ({ data }) => {
  return (
    <div>
      <div>
        <p>{data.title}</p>
        <div>
          <img src={icon} alt="" />
        </div>
      </div>
      <div>
        <p>{data.num}</p>
      </div>
    </div>
  );
};

export default Overviews;
