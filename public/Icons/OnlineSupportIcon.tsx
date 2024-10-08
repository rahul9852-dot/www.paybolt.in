import React from "react";

const OnlineSupportIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
  >
    <rect width="60" height="60" fill="url(#pattern0_205_313)" />
    <defs>
      <pattern
        id="pattern0_205_313"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_205_313" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_205_313"
        width="90"
        height="90"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default OnlineSupportIcon;
