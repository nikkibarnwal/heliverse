import SingleFeature from "./SingleFeature";

const Features = () => {
  return (
    <div className="mx-6 text-[22px] font-normal fontFamilyOutfit">
      <div className="w-full  mt-16 text-center dark:bg-gray-800 dark:border-gray-700">
        <div className="flex-1 flex-col justify-between ml-4">
          <div className="flex-1 text-white p-4 rounded-lg">
            <h1 className="mx-auto w-2/4 text-center text-[35px] leading-[55px] font-normal fontFamilyOutfit trustHeading">
              An All-Round Plugin With Powerful Features
            </h1>
          </div>
          <div className="mx-auto w-2/4 text-center leading-7 font-normal fontFamilyOutfit trustHeading">
            <p className="text-[18px] pDescription globalTextColor font-light text-wrap">
              Whether you're a seasoned web designer or just starting out,
              Motion Art for Elementor seamlessly integrates with the Elementor
              platform, providing you with a seamless and intuitive experience.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <SingleFeature
          imgSource="./assets/images/img9.png"
          heading="Light Weight"
          title="Motion Art for Elementor is designed to be lightweight."
        />
        <SingleFeature
          imgSource="./assets/images/img6.png"
          heading="100% Responsive"
          title="Create a consistent visual experience across all devices."
        />
        <SingleFeature
          imgSource="./assets/images/img7.png"
          heading="User Friendly Interface"
          title="Ensure a smooth experience for both applicants and administrators."
        />
      </div>
    </div>
  );
};

export default Features;
