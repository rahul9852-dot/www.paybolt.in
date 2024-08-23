import React from 'react';
import Image from 'next/image';
import { OnlineMTConstants } from '@/constants/money-transfer.constant';

const MAdvantage: React.FC = () => {
  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-center leading-tight max-w-3xl mx-auto">
        Benefits of using Paybolt online payment gateway for your business
      </h2>
      
      <div className="flex flex-col items-center gap-8 md:gap-6 w-full">
        <div className="flex flex-wrap justify-center gap-8 md:gap-6 w-full max-w-8xl">
          {OnlineMTConstants.slice(0, 4).map((item, index) => (
            <div key={index} className="flex flex-col items-center relative w-full sm:w-72 md:w-56 h-56 mb-4 md:mb-0">
              <Image
                src={item.imgTag}
                alt={item.description}
                width={220}
                height={220}
                className="z-0"
              />
              <div className="absolute inset-0 flex items-end justify-center z-10 bottom-10">
                <p className="text-primary text-sm font-semibold text-center px-4 max-w-[90%]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-6 w-full max-w-7xl">
          {OnlineMTConstants.slice(4, 8).map((item, index) => (
            <div key={index + 4} className="flex flex-col items-center relative w-full sm:w-72 md:w-56 h-56 mb-4 md:mb-0">
              <Image
                src={item.imgTag}
                alt={item.description}
                width={220}
                height={220}
                className="z-0"
              />
              <div className="absolute inset-0 flex items-end justify-center z-10 bottom-10">
                <p className="text-primary text-sm font-semibold text-center px-4 max-w-[90%]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MAdvantage;