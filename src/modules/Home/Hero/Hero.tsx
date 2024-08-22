import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

import heroImage from '@public/images/hero-img.png';
import { BuiltFor } from '@modules/Home/BuiltFor';
import { Swiper } from '@modules/Home/Swiper';

import './Hero.scss';

export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero">
        <div className="hero-left">
          <h2 className="text-primary font-semibold text-4xl text-center md:text-start">
            Advanced Payment Solutions
          </h2>
          <h2 className="font-semibold text-4xl text-center md:text-start">
            for India's finest disruptors
          </h2>

          <div className="mt-8 flex flex-col justify-center text-center md:items-start gap-8">
            <p className="text-sm text-center md:text-start">
              Quick Payments | Seamless Integration | Top-tier UPI stack
            </p>
            <Link className="btn" href="/register">
              <span>Sign up for free</span>
              <FaArrowRightLong className="relative top-[1px] text-xl" />
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <Swiper
            items={[
              <Image
                src={heroImage}
                className="object-center"
                alt="Hero Image"
                width={700}
                height={500}
              />,
              <Image
                src={heroImage}
                className="object-center"
                alt="Hero Image"
                width={700}
                height={500}
              />,
              <Image
                src={heroImage}
                className="object-center"
                alt="Hero Image"
                width={700}
                height={500}
              />,
            ]}
          />
        </div>
      </div>
      <BuiltFor />
    </section>
  );
};
