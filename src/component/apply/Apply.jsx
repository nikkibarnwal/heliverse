import React from "react";
import "./Apply.css";

const Apply = () => {
  return (
    <div className="apply">
      <div className="flex items-center justify-center px-4 py-8">
        <div className="mx-auto w-full md:w-2/3 lg:w-2/4 text-center text-[28px] md:text-[35px] leading-[40px] md:leading-[55px] font-normal fontFamilyOutfit trustHeading">
          <h1>Apply On Any Section Or Enable For Whole Page</h1>
        </div>
      </div>
      <div className="magic grid grid-cols-1 md:grid-cols-2 py-10 md:py-20 gap-4 px-4">
        <div className="w-full applyOnSection mb-16 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex-1 flex flex-col justify-between ml-4">
            <div className="flex-1 text-white p-4 mb-4 rounded-lg">
              <h1 className="text-2xl md:text-3xl">Apply On Section</h1>
            </div>
            <div className="flex-1 text-white p-4 mb-4 rounded-lg">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </div>
            <div className="flex-1 p-4 rounded-lg">
              <img src="./assets/images/img11.png" alt="Apply On Section" />
            </div>
          </div>
        </div>
        <div className="w-full applyOnSection mt-16  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex-1 flex flex-col justify-between ml-4">
            <div className="flex-1 text-white p-4 mb-4 rounded-lg">
              <h1 className="text-2xl md:text-3xl">Apply On Page</h1>
            </div>
            <div className="flex-1 text-white p-4 mb-4 rounded-lg">
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </div>
            <div className="flex-1 p-4 rounded-lg">
              <img src="./assets/images/img10.png" alt="Apply On Page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
