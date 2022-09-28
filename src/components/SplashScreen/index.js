import React from "react";
import ResponsiveBreakpoints from "../../helper/ResponsiveBreakpoints";

const SplashScreen = () => {
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();

  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="d-flex justify-content-center align-items-center"
    >
      <img
        style={{ width: isMD ? "30vw" : "15vw" }}
        src="/assets/images/logo.svg"
        alt="logo"
      />
    </div>
  );
};

export default SplashScreen;
