import PropTypes from "prop-types";

const TrustSingle = ({ imgSrc }) => {
  return (
    <div className={`grid grid-cols-4 gap-4 p-4 rounded-lg `}>
      <div className="col-span-1 flex justify-center items-center">
        <img src={imgSrc} alt="my trust" className=" rounded-full" />
      </div>
      <div className="col-span-3 pt-5">
        <div className="container">
          <div className="text-white mb-4 flex justify-center md:justify-start">
            <img
              src="./assets/images/img4.png"
              alt="my logo"
              className="w-20 h-5"
            />
          </div>
          <div className="text-white text-center md:text-left">
            <p className="text-sm">
              <strong>4.5</strong> Score, 9 Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

TrustSingle.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  divCenter: PropTypes.string,
};

export default TrustSingle;
