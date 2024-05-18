const Browsers = () => {
  return (
    <div className="flex items-center applyOnSection border mx-4 md:mx-6 border-gray-200 rounded-3xl shadow justify-center p-4 md:p-8">
      <div className="mx-auto text-[18px] md:text-[22px] font-normal fontFamilyOutfit trustHeading">
        <div className="w-full my-8 md:my-10 text-center dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col justify-between items-center">
            <div className="text-white p-2 md:p-4 rounded-lg">
              <h1 className="text-2xl md:text-3xl">
                Supported by All Popular Browsers
              </h1>
            </div>
            <div className="text-white p-3 mb-4 rounded-lg">
              <h2 className="text-[14px] md:text-[16px] md:w-[28rem] text-wrap globalTextColor">
                Rest assured, Motion Art is designed to be compatible with all
                major web browsers.
              </h2>
            </div>
            <div className="p-2 md:p-4 rounded-lg">
              <img
                src="./assets/images/img8.png"
                alt="Supported Browsers"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browsers;
