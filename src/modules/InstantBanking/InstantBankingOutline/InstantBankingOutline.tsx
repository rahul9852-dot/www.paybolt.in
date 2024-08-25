import { BenefitCard } from "@/components/BenefitCard";
import { GradientCard } from "@/components/GradientCard";
import {
  InstantBankingServiceBeneFits,
  InstantBankingServiceConstants,
} from "@/constants/instant-banking.constant";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const InstantBankingOutline: React.FC = () => {
  const outlineItems = [
    {
      title: "Penny Testing",
      description:
        "Drop a penny to verify if the bank account exists & match the beneficiary's name to that at the bank.",
    },
    {
      title: "Penniless Testing",
      description:
        "Utilize the latest industry innovation to do an instant penniless bank account verification. *Limited coverage",
    },
    {
      title: "UPI ID",
      description:
        "Check if a UPI ID exists and get the beneficiary's name from the bank directly.",
    },
    {
      title: "IFSC Code",
      description:
        "The most up-to-date list of IFSC codes for verification. Now effortlessly match the beneficiary's name to the bank account.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center px-4 py-16">
      <h2 className="text-primary font-semibold text-3xl md:text-4xl mb-6">
        <span className="block">Enjoy the most comprehensive</span>
        <span className="block">account verification stack.</span>
      </h2>
      <p className="max-w-2xl mb-12">
        Paybolt payment link solution helps businesses create and share payment
        links on-the-go via Email, SMS or WhatsApp to receive payments in
        no-time. Not just businesses, a homeprenuer or freelancer or any online
        seller can collect payments online through a payment link solution.
      </p>
      <div className="bg-primary-50 rounded-lg p-6 w-full max-w-3xl mb-8">
        {outlineItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-start gap-6  mb-4">
              <div className="flex-shrink-0 mr-4 flex items-center w-36">
                <span className="font-semibold mr-2 text-left w-full">
                  {item.title}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-24 h-0 border-t-2 border-dotted border-white"></div>
                <span className="text-white mr-2 ">&gt;</span>
              </div>
              <div className="text-left max-w-lg">
                <p>{item.description}</p>
              </div>
            </div>
            {index < outlineItems.length - 1 && (
              <hr className="border-t border-white my-4" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-primary text-2xl md:text-4xl font-semibold mb-8 text-center leading-tight max-w-3xl mx-auto">
          Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto py-10">
          {InstantBankingServiceConstants.map((feat) => (
            <GradientCard key={feat.title} {...feat} />
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center py-10">
        <button className="btn !bg-primary !text-white">
          Get started
          <FaArrowRightLong className="relative top-[1px] text-xl" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-primary text-2xl md:text-4xl font-semibold mb-8 text-center leading-tight max-w-3xl mx-auto">
          Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto py-12">
          {InstantBankingServiceBeneFits.map((benefits, idx) => (
            <BenefitCard
              key={benefits.title}
              title={benefits.title}
              phase={idx}
              description={benefits.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstantBankingOutline;
