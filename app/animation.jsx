import Lottie from "lottie-react";
import React, { memo } from "react";
import animationData from "../public/thinking.json";

const LottieAnimation = () => {
  return (
    <div className="w-1/2 h-1/2 bg-transparent p-2 rounded-2xl ">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default memo(LottieAnimation);
