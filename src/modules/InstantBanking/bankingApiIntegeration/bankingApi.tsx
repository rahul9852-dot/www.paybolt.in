import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import UserIcon from "@public/Icons/User";
import CheckMarkIcon from '@public/Icons/CheckMarkIcon';

const BankingApi: React.FC = () => {
  const integrationPoints = [
    'Highly reliable & secure',
    'Webhooks for real-time status'
  ];

  return (
    <div className="instant-banking-integration bg-primary mb-8">
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

          <div className="relative w-full">
            <div className="w-full bg-secondary-100 rounded-lg p-8 relative">
              <div className="absolute top-4 right-4 bg-primary-100 rounded-lg p-2 shadow-md">
                <p className="text-white font-medium">Passed</p>
              </div>
              <div className="flex items-center gap-12 mb-6">
                <UserIcon className="mr-2" />
                <h2 className="text-primary font-semibold text-2xl">Account Verification</h2>
              </div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <p className="text-primary w-48">A/c Number Comparison</p>
                  <CheckMarkIcon className="ml-10" />
                </div>
                <div className="bg-white rounded h-4 w-48 mb-2"></div>
                <div className="bg-white rounded h-4 w-44"></div>
              </div>
              <div>
                <div className="flex items-center gap-12 mb-2">
                  <p className="text-primary w-48">IFSC Comparison</p>
                  <CheckMarkIcon  />
                </div>
                <div className="bg-white rounded h-4 w-48 mb-2"></div>
                <div className="bg-white rounded h-4 w-44"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingApi;