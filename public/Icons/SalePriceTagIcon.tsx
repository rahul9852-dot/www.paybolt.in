import React from "react";

const SalePriceTagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
  >
    <rect width="72" height="72" fill="url(#pattern0_226_163)" />
    <defs>
      <pattern
        id="pattern0_226_163"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_226_163" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_226_163"
        width="90"
        height="90"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default SalePriceTagIcon;
