import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import './PreFooter.scss';

export const PreFooter = () => {
  return (
    <section className="pre-footer-wrapper">
      <span className="border-style" />
      <div className="pre-footer">
        <h3 className="text-xl md:text-3xl font-semibold text-background text-center skew-x-6 md:skew-x-12">
          Get Started Today For Smarter Business Finance
        </h3>
        <div className="skew-x-6 md:skew-x-12">
          <Link href="/">Sign Up</Link>
          <Link href="/">Connect your bank account</Link>
          <Link href="/">Pay and get paid</Link>
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
