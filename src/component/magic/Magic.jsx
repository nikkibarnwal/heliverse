import "./Magic.css";

const Magic = () => {
  return (
    <div className="magic grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-2 px-4">
      <div className="md:col-span-2 px-2">
        <h1 className="magicHeading text-white mb-3">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h1>
        <p className="text-white globalTextColor">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <div className="mt-8">
          <button
            type="button"
            className="bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-normal rounded-lg 
        px-7 py-4 text-white text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
          >
            <span>Purchase From Envato</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-4 me-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden lg:block col-span-1"></div>
      <div className="col-span-1 flex justify-center items-center">
        <div className="mr-0">
          <img
            src="./assets/images/img5.png"
            alt="Magic Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default Magic;
