import React from "react";
import RiseLoader from "react-spinners/RiseLoader";
import ResponsiveBreakpoints from "../../helper/ResponsiveBreakpoints";

const Loading = () => {
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();

  return (
    <div
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        zIndex: 9999,
        backgroundColor: "#2222224d",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <RiseLoader size={isMD ? 10 : 15} color="#EB1D36" />
    </div>
  );
};

export default Loading;
