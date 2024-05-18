import "./Header.css";
const Header = () => {
  return (
    <section className="py-10 w-full z-20 my-8 start-5 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 pt-8">
        <a
          href="https://www.heliverse.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="./assets/images/img12.png"
            className="h-14"
            alt="Heliverse Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-gray-900 bg-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
            hover:border-white focus:ring-gray-300 font-medium rounded-lg text-xl px-8 py-3 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Purchase Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
