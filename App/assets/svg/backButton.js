import React, { FC } from "react";
import Svg, { Path, Rect } from "react-native-svg";


export const BackButton = () => {
  return (
    <Svg
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
    >
      <Path
        stroke="#151C26"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M11.165 6.918L4.083 14l7.082 7.082M23.917 14H4.282"
      ></Path>
    </Svg>
  );
}
