const Header = () => {
  return (
    <header className="h-[30vh] bg-topBgPattern  text-white">
      <div className="body-container p-5 flex flex-col md:flex-row md:justify-between">
        <div className="border-b-[1px] pb-3 md:border-none  py-3">
          <h1 className="text-2xl"> Social Media Dashboard</h1>
          <p className="text-[13px]">Total Followers: 23,004</p>
        </div>
        <div className=" py-3 flex justify-between md:items-center md:gap-x-3">
          <p>Dark Mode</p>
          <div className="relative">
            <input
              type="checkbox"
              className="peer
    appearance-none cursor-pointer
    border border-gray-300 rounded-full
    checked:border-gray-900 w-12 h-6"
            />
            <span
              className="peer-checked:left-7
    peer-checked:bg-gray-900
    transition-all duration-200
    pointer-events-none w-4 h-4
    block absolute top-1 left-1
    rounded-full bg-gray-300"
            ></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
