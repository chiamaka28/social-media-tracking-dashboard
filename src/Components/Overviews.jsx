const Overviews = ({ data }) => {
  return (
    <div className="my-container w-[90%] bg-cardBg m-3 p-3 rounded-md max-w-[350px] lg:w-[250px] lg:m-3">
      <div className="flex justify-between items-center pb-5">
        <p className="text-[12px] text-cardText">{data.title}</p>
        <div>
          <img src={data.icon} alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[30px] font-semibold text-white">{data.num}</p>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <img src={data.arrow} alt="" />
          </div>
          <p className="text-[12px]">{data.progress}</p>
        </div>
      </div>
    </div>
  );
};

export default Overviews;
