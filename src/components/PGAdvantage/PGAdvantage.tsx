import React from 'react';
import Image from 'next/image';
import { OnlineMTConstants } from '@/constants/money-transfer.constant';


const PGAdvantage: React.FC = () => {
  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-center leading-tight max-w-3xl mx-auto">
        Benefits of using Paybolt online payment gateway for your business
      </h2>
      
      <div className="flex flex-col items-center gap-12 md:gap-10 w-full">
        <div className="flex flex-wrap justify-center gap-12 md:gap-10 w-full max-w-8xl">
          {OnlineMTConstants.slice(0, 4).map((item, index) => (
            <div key={index} className="flex flex-col items-center relative w-full sm:w-80 md:w-64 h-64 mb-6 md:mb-0">
              <Image
                src={item.imgTag}
                alt={item.description}
                width={240}
                height={240}
                className="z-0"
              />
              <div className="absolute inset-0 flex items-end justify-center z-10 bottom-16">
                <p className="text-primary text-sm font-semibold text-center px-4 max-w-[90%]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-12 md:gap-10 w-full max-w-7xl">
          {OnlineMTConstants.slice(4, 8).map((item, index) => (
            <div key={index + 4} className="flex flex-col items-center relative w-full sm:w-80 md:w-64 h-64 mb-6 md:mb-0">
              <Image
                src={item.imgTag}
                alt={item.description}
                width={240}
                height={240}
                className="z-0"
              />
              <div className="absolute inset-0 flex items-end justify-center z-10 bottom-16">
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

export default PGAdvantage;