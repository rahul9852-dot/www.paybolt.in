import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong, FaUser } from 'react-icons/fa6';
import CheckMarkIcon from '@public/Icons/CheckMarkSvg';
import CardBgImage from '@public/images/Card-bg.png';

const BankingApi: React.FC = () => {
  const integrationPoints = [
    'Highly reliable & secure',
    'Webhooks for real-time status'
  ];

  return (
    <div className="instant-banking-integration bg-primary">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="content">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
              <span className="block">A single API integration</span>
              <span className="block">is all you need to get started!</span>
            </h2>
            <p className="mb-8 text-white">The most seamless & simple-to-integrate account verification APIs ever.</p>
            <div className="integration-points mb-8">
              {integrationPoints.map((point, index) => (
                <div key={index} className="flex items-start mb-4">
                  <div className="number-circle bg-primary-50 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <p className="text-white">{point}</p>
                </div>
              ))}
            </div>
            <button className="btn bg-white text-primary flex items-center">
              More Details
              <FaArrowRightLong className="ml-2" />
            </button>
          </div>
          <div className="relative h-[500px] w-full">
            <Image
              src={CardBgImage}
              alt="Card background"
              layout="fill"
              objectFit="contain"
              className="z-10"
            />
            <div className="absolute top-4 left-4 z-20 flex items-center">
              <FaUser className="text-primary mr-2" />
              <span className="text-primary font-semibold">Account Verification</span>
            </div>
            <div className="absolute top-4 right-4 z-20 bg-primary-50 px-2 py-1 rounded">
              <span className="text-black text-sm">Passed</span>
            </div>
            <div className="absolute top-1/4 left-4 z-20 bg-white p-2 rounded flex items-center">
              <CheckMarkIcon className="text-primary mr-2" width={20} height={20} />
              <span className="text-primary">A/c Number Comparison</span>
            </div>
            <div className="absolute top-2/4 left-4 z-20 bg-white p-2 rounded flex items-center">
              <CheckMarkIcon className="text-primary mr-2" width={20} height={20} />
              <span className="text-primary">A/c Number Comparison</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingApi;