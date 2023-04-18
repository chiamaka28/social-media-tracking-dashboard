const Card = ({ data }) => {
  return (
    <div
      className={`my-container flex flex-col items-center  ${data.bg} m-5 rounded-md lg:w-[250px] lg:m-3  `}
    >
      <div className="bg-cardBg w-[100%] flex flex-col items-center mt-1 rounded-md p-5">
        <div className="flex justify-center items-center gap-2">
          <div>
            <img src={data.icon} alt="" />
          </div>
          <div className="text-white text-[12px]">
            <p>{data.handle}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-2 font-bold text-white">
          <p className="text-[40px]">{data.follows}</p>
          <span>{data.tittle}</span>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <img src={data.arrow} alt="" />
          </div>
          <p className={`text-[13px] `}>{data.daily}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
