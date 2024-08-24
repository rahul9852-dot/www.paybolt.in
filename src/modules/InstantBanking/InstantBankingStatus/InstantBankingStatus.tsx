import React from 'react';
import WrongCardIcon from '@public/Icons/WrongCard';
import CorrectCardIcon from '@public/Icons/CorrectCardSvg';
import PlainAccountIcon from '@public/Icons/PlainAccountSvg';
import AccountMatchingIcon from '@public/Icons/AccountMatching';
import { FaArrowRightLong } from 'react-icons/fa6';

const InstantBankingStatus: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-primary font-semibold text-3xl md:text-4xl mb-12 text-center">
        <span className="block">Know the accurate reason</span>
        <span className="block">for a failed verification</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-primary-50 rounded-lg p-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex justify-center items-center">
              <WrongCardIcon />
            </div>
            <div className="flex justify-center items-center">
              <CorrectCardIcon />
            </div>
            <div className="flex justify-center items-center">
              <PlainAccountIcon />
            </div>
            <div className="flex justify-center items-center">
              <AccountMatchingIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-primary text-lg mb-6">
            Verification might not go through if there's an issue with the account number, IFSC, or if the account is blocked, frozen or closed.
          </p>
          <p className="text-primary text-xl font-semibold mb-8">
            Find out the reason for the failure instantly.
          </p>
          <button className="btn bg-primary-50 text-primary self-start flex items-center">
              More Details
            <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstantBankingStatus;