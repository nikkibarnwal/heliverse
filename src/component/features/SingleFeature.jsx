import PropTypes from "prop-types";

const SingleFeature = ({ imgSource, heading, title }) => {
  return (
    <div className="max-w-md p-6 customBg border rounded-lg shadow-2xl shadow-cyan-500/50 dark:bg-gray-800 dark:border-gray-700">
      <img src={imgSource} alt="featureImg" />
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {/* Need a help in Claim? */}
        </h5>
      </a>
      <h2 className="mb-3 text-2xl font-normal fontFamilyOutfit trustHeading">
        {heading}
      </h2>
      <p className="inline-flex text-lg text-wrap font-medium items-center fontFamilyOutfit globalTextColor">
        {title}
      </p>
    </div>
  );
};

SingleFeature.propTypes = {
  imgSource: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SingleFeature;
