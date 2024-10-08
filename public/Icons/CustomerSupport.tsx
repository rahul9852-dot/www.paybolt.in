import React from "react";

const CustomerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="68"
    height="68"
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
  >
    <rect width="68" height="68" fill="url(#pattern0_226_179)" />
    <defs>
      <pattern
        id="pattern0_226_179"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_226_179" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_226_179"
        width="90"
        height="90"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default CustomerIcon;
