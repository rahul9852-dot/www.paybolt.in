import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import CheckMarkIcon from "@public/Icons/CheckMarkSvg";
import YoungManImage from "@public/images/young-man.png";
import BeneficiaryImg from "@public/images/Beneficiary-bg.png";

const InstantBankingVerification: React.FC = () => {
  const verificationPoints = [
    "99.8% success rates",
    "Instant 3-second verifications",
    "Coverage across leading banks",
  ];

  return (
    <div className="instant-banking-verification bg-primary text-white py-16">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 px-40 md:pr-8 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            <span className="block">Elevating your verification </span>
            <span className="block">experience</span>
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

        {/* Right side images */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative md:-mr-8">
          <div className="relative h-[500px] md:h-[600px]">
            {/* Young Man Image */}
            <Image
              src={YoungManImage}
              alt="Young man"
              layout="fill"
              objectFit="cover"
              objectPosition="center right"
            />

            {/* Beneficiary Image */}
            <div className="absolute top-4 left-4 w-2/3 h-1/2">
              <Image
                src={BeneficiaryImg}
                alt="Beneficiary background"
                layout="fill"
                objectFit="contain"
                objectPosition="left top"
              />
              <div className="absolute top-4 left-4 z-10">
                <h3 className="text-primary font-semibold mb-2">
                  Beneficiary Details
                </h3>
              </div>
              <div className="absolute bottom-4 left-4  z-10">
                <button className="btn bottom-0 !bg-primary !text-white px-4 mt-2">
                  More Details
                  <FaArrowRightLong className="ml-2" />
                </button>
              </div>
            </div>

            {/* Instantly Verified Card */}
            <div className="absolute bottom-48 left-36 bg-primary-50 p-2 rounded-lg shadow-lg flex items-center">
              <span className="text-primary font-extralight ml-2">
                Instantly Verified
              </span>
              <CheckMarkIcon className="ml-2" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantBankingVerification;
