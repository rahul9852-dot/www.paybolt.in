import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import CheckMarkIcon from '@public/Icons/CheckMarkSvg';
import YoungManImage from "@public/images/young-man.png";
import BeneficiaryImg from "@public/images/Beneficiary-bg.png";

const InstantBankingVerification: React.FC = () => {
  const verificationPoints = [
    '99.8% success rates',
    'Instant 3-second verifications',
    'Coverage across leading banks'
  ];

  return (
    <div className="instant-banking-verification bg-primary text-white">
      <div className="container mx-auto py-16 pr-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="content px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              <span className="block">Instant Bank Account</span>
              <span className="block">Verification</span>
            </h2>
            <p className="mb-8">Verify bank accounts instantly and securely</p>
            <div className="verification-points mb-8">
              {verificationPoints.map((point, index) => (
                <div key={index} className="flex items-center mb-4">
                  <div className="number-circle bg-primary-50 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <button className="btn bg-white text-primary">
              More Details
              <FaArrowRightLong className="ml-2" />
            </button>
          </div>
          <div className="relative h-[600px] overflow-hidden md:w-[calc(100%+2rem)]">
            <div className="absolute inset-0">
              <Image
                src={YoungManImage}
                alt="Young man"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
                className="z-10"
              />
            </div>
            <div className="absolute left-0 top-0 h-3/4 w-3/4 z-20">
              <Image
                src={BeneficiaryImg}
                alt="Beneficiary background"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-4 left-4 z-30">
                <h3 className="text-primary font-semibold mb-2">Beneficiary Details</h3>
                <button className="btn !bg-primary !text-white px-4 mt-2">
                  More Details
                  <FaArrowRightLong className="ml-2" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-20 left-4 bg-primary-50 p-2 rounded-lg shadow-lg flex items-center z-30">
              <span className="text-primary font-extralight ml-2">Instantly Verified</span>
              <CheckMarkIcon className="ml-2" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantBankingVerification;