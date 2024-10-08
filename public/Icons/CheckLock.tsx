import React from "react";

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
  >
    <rect width="64" height="64" fill="url(#pattern0_226_174)" />
    <defs>
      <pattern
        id="pattern0_226_174"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_226_174" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_226_174"
        width="90"
        height="90"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default CheckIcon;
