import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const AddPhoto = () => {
  return (
    <Svg
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <Path
        stroke="#8A8C90"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 29.333c7.333 0 13.333-6 13.333-13.333S23.333 2.667 16 2.667 2.667 8.667 2.667 16s6 13.333 13.333 13.333zM10.667 16h10.666M16 21.333V10.667"
      ></Path>
    </Svg>
  );
}

