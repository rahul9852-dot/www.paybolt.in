import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

import heroImage from '@public/images/upi-qr-hero.png';

import './Hero.scss';
import { IoIosCard } from 'react-icons/io';
import { CardWithWatermark } from '@/components/CardWithWatermark';
import { FEATURES } from '@/constants/upi-qr-collections.constant';
import PGAdvantage from '@/components/PGAdvantage/PGAdvantage';

export const Hero = () => {
  return (
    <section className="upi-qr-hero-wrapper">
      <div className="upi-qr-hero">
        <div className="flex flex-col justify-center items-center md:items-start gap-8">
          <h1 className="text-4xl font-semibold text-primary mt-0 md:mt-24">
            UPI QR Collections
          </h1>
          <p>
            PayBolt payment gateway provides a secure and reliable method of
            accepting online payments
          </p>
          <Link className="btn mt-3" href="/register">
            <span>Sign up for free</span>
            <FaArrowRightLong className="relative top-[1px] text-xl" />
          </Link>
        </div>
        <Image
          src={heroImage}
          alt="Upi Qr Collections"
          width={700}
          height={600}
          className="img"
          quality={100}
        />
      </div>

      <div className="container mx-auto px-2 flex flex-col justify-center items-center gap-5 mt-20">
        <h2 className="text-center text-3xl font-semibold text-primary">
          Easily accept online payments on your website or app
        </h2>

        <p className="text-center lg:max-w-[800px]">
          PayBolt payment gateway provides a secure and reliable method of
          accepting online payments for your business. It comes with
          best-in-class features like automated reconciliation, refund
          management, brand and discount coupons for your customers, etc.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {FEATURES.map(feature => (
            <CardWithWatermark key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
