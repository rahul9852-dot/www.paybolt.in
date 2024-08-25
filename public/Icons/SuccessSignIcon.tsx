import React from "react";

const SuccessSign: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 59 55"
    fill="none"
    {...props}
  >
    <circle
      cx="25.4907"
      cy="29.5133"
      r="24.4907"
      stroke="#BB7C14"
      stroke-width="2"
    />
    <path
      d="M12.0221 18.1406L7.84332 22.2405L24.5586 45.2L31.2447 33.7202C43.2796 14.0406 54.646 3.10755 58.8248 0.100952H51.3029C43.9482 2.72489 29.8517 18.1406 23.7228 25.5204L12.0221 18.1406Z"
      fill="url(#paint0_linear_117_46)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_117_46"
        x1="33.3341"
        y1="0.100952"
        x2="33.3341"
        y2="45.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="0.495" stop-color="#EEF4FF" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
    </defs>
  </svg>
);

export default SuccessSign;
