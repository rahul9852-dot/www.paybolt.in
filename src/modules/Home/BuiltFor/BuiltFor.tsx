"use client";

import { ReactTyped } from "react-typed";
import { INDIA_IN_DIFF_LANG } from "@/constants/common.constant";

import "./BuiltFor.scss";

export const BuiltFor = () => {
  return (
    <div className="h-[280px] bg-primary text-background flex flex-col justify-center items-center uppercase gap-4">
      <h5 className="text-3xl">Built for</h5>
      <div className="typing-wrapper">
        <span className="before" />
        <ReactTyped
          strings={INDIA_IN_DIFF_LANG}
          typeSpeed={80}
          backSpeed={80}
          backDelay={1000}
          autoInsertCss={true}
          loop
          className="skew-x-12 inline-block"
        />
        <span className="after" />
      </div>
    </div>
  );
};
