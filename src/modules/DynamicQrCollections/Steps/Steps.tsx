import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import stepImg from '@public/images/steps.png';
// import logoLightFull from '@public/images/logos/light-full.svg';
import { cn } from '@/utils/cn';

import './Steps.scss';

interface Props {
  className?: string;
  image?: StaticImageData;
  heading: string;
  children: React.ReactNode;
}

export const Steps = ({ className, image, children, heading }: Props) => {
  return (
    <section className={cn('steps-wrapper', className)}>
      <div className="steps">
        <div className="left">
          <h3 className="text-3xl font-semibold max-w-md text-left pb-5">
            {heading}&nbsp;&nbsp;
            {/* <Image
              src={logoLightFull}
              alt="PayBolt"
              width={200}
              height={100}
              className="inline-block"
            /> */}
          </h3>
          {children}
          <Link href="/" className="btn mt-10">
            <span>More Details</span>
            <FaArrowRightLong className="relative top-[1px] text-xl" />
          </Link>
        </div>

        <Image
          src={image ?? stepImg}
          className="rounded-lg"
          alt="Connected Banking"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};
