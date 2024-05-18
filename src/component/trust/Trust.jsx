import "./Trust.css";
import TrustSingle from "./TrustSingle";

const Trust = () => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="mx-auto text-[22px] font-normal fontFamilyOutfit text-center trustHeading text-wrap">
          <h2>Trusted by thousands of users around the world</h2>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 py-20 gap-4 px-2">
        <TrustSingle imgSrc="./assets/images/img2.png" />
        <TrustSingle imgSrc="./assets/images/img1.png" />
        <TrustSingle imgSrc="./assets/images/img3.png" />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-4 px-2">
        <TrustSingle imgSrc="./assets/images/img2.png" />
        <TrustSingle imgSrc="./assets/images/img1.png" />
        <TrustSingle imgSrc="./assets/images/img3.png" />
      </div>
    </>
  );
};

export default Trust;
