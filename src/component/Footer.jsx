const Footer = () => {
  return (
    <footer className="text-white mt-24 customBgGradient">
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center dark:text-gray-400">
            © 2023 Copywrite. All rights reserved by{" "}
            <a href="https://flowbite.com/" className="hover:underline">
            QodeMatrix
            </a>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-sm  sm:text-center dark:text-gray-400"
            >
              <span>Documentation</span>
            </a>
            <a
              href="#"
              className="text-sm sm:text-center dark:text-gray-400 pl-10 pr-2"
            >
              <span>Support</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
