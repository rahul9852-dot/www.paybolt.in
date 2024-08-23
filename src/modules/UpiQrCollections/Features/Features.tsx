import { GradientCard } from '@/components/GradientCard';

import './Features.scss';
import {
  BENEFITS_CARD,
  FEAT_BENEFITS,
} from '@/constants/upi-qr-collections.constant';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { BenefitCard } from '@/components/BenefitCard';

export const Features = () => {
  return (
    <section className="features-inner-wrapper">
      <div className="features-inner">
        <h2 className="text-4xl text-primary font-semibold text-center mb-20">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[160px]">
          {FEAT_BENEFITS.map(feat => (
            <GradientCard key={feat.title} {...feat} />
          ))}
        </div>
        <div className="flex justify-center items-center my-24">
          <Link
            href="/"
            className="btn !bg-primary !text-background !px-4 !py-2">
            <span>Get Started</span>
            <FaArrowRightLong className="relative top-[1px] text-xl" />
          </Link>
        </div>
        <h2 className="text-4xl text-primary font-semibold text-center mb-10">
          Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 min-h-[160px] pb-20">
          {BENEFITS_CARD.map((benefit, i) => (
            <BenefitCard key={benefit.title} {...benefit} phase={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
