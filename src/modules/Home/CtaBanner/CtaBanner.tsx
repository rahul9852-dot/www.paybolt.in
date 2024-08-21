import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import './CtaBanner.css';

export const CtaBanner = () => {
  return (
    <section className="cta-banner-wrapper">
      <div className="cta">
        <h3 className="text-xl md:text-4xl font-bold pr-2">
          Easy and fast way to Send Money
        </h3>
        <p className="text-xs font-semibold md:text-sm pr-2">
          Say goodbye to slow transfers and hello to instant money magic!
        </p>
        <Link href="/register" className="btn">
          <span>Sign up for free</span>
          <FaArrowRightLong className="relative top-[1px] text-xl" />
        </Link>
      </div>
    </section>
  );
};
