import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { ImUserPlus } from 'react-icons/im';
import { FaCheckCircle, FaMoneyCheckAlt } from 'react-icons/fa';

import './PreFooter.scss';

export const PreFooter = () => {
  return (
    <section className="pre-footer-wrapper">
      <span className="border-style" />
      <div className="pre-footer">
        <h3 className="text-xl md:text-3xl font-semibold text-background text-center skew-x-6 md:skew-x-12">
          Get Started Today For Smarter Business Finance
        </h3>
        <div className="skew-x-6 md:skew-x-12 grid grid-cols-1 place-items-center md:grid-cols-3 gap-3 text-sm text-foreground">
          <Link href="/" className="text-with-icon">
            <ImUserPlus className="text-lg relative top-[1px]" />
            <span>Sign Up</span>
          </Link>
          <Link href="/" className="text-with-icon">
            <FaCheckCircle className="text-lg relative top-[1px]" />
            <span>Connect your bank account</span>
          </Link>
          <Link href="/" className="text-with-icon">
            <FaMoneyCheckAlt className="text-lg relative top-[1px]" />
            <span>Pay and get paid</span>
          </Link>
        </div>
        <Link
          href="/"
          className="btn !bg-primary !text-background !px-4 !py-2 skew-x-6 md:skew-x-12">
          <span>Get Started</span>
          <FaArrowRightLong className="relative top-[1px] text-xl" />
        </Link>
      </div>
    </section>
  );
};
