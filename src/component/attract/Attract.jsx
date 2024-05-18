import "./Attract.css";
const Attract = () => {
  return (
    // <div className="container mx-auto p-4">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //     <div className="bg-red-500 p-4 text-white">Item 1</div>
    //     <div className="bg-green-500 p-4 text-white">Item 2</div>
    //     <div className="bg-blue-500 p-4 text-white">Item 3</div>
    //     <div className="bg-yellow-500 p-4 text-white">Item 4</div>
    //     <div className="bg-purple-500 p-4 text-white">Item 5</div>
    //     <div className="bg-pink-500 p-4 text-white">Item 6</div>
    //     <div className="bg-indigo-500 p-4 text-white">Item 7</div>
    //     <div className="bg-teal-500 p-4 text-white">Item 8</div>
    //   </div>
    // </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-4 px-5">
      <div className="text-[18px] grid grid-cols-3 md:grid-cols-3 md:text-center mt-2 gap-5 align-left">
        <div className="mt-6 col-span-2">
          <h2 className="fontColor font-medium mb-3 text-wrap">
            <span>Transform Your Website</span>
          </h2>
          <h2 className="text-white font-light">With Motion Art Effect</h2>
        </div>
        <div></div>
      </div>
      {/* <div className="grid place-items-center">
        <div className="text-[18px] grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
          <div className="mt-6 col-span-1 sm:col-span-3">
            <h2 className="fontColor font-medium mb-3">
              <span>Transform Your Website</span>
            </h2>
            <h2 className="text-white font-light">With Motion Art Effect</h2>
          </div>
          <div></div>
        </div>
      </div> */}

      <div className="col-span-1 lg:col-span-2 md:max-w-2xl">
        <div className="container mx-auto p-4">
          <div className="text-white p-4 mr-2.5">
            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] leading-tight md:leading-[75px]">
              Attract Your Visitors Attention With Colorful
            </h1>
          </div>
          <div className="text-white p-4 pt-0">
            <h1 className="text-[28px] sm:text-[40px] md:text-[55px] fontColor leading-tight md:leading-[75px]">
              Motion Art Effect
            </h1>
          </div>
          <div className="text-white p-4">
            <p className="text-[16px] sm:text-[18px] pDescription globalTextColor font-light">
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website.
            </p>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Attract;
