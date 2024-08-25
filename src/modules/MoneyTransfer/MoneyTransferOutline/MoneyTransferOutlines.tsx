"use client";
import Cards from "@/components/Cards/Cards";
import { MoneyTransferOutlinesConstants } from "@/constants/money-transfer.constant";
import createLinkImg from "@public/images/create-link.png";
import secCreateLinkImg from "@public/images/create-link1.png";
import thirdCreateLinkImg from "@public/images/create-link2.png";
import Image from "next/image";
import VectorSvg1 from "@public/Icons/VectorSvg1";
import VectorSvg2 from "@public/Icons/VectorSvg2";
import VectorSvg3 from "@public/Icons/VectorSvg3";

const MoneyTransferOutlines = () => {
  return (
    <div className="mt-10 conatiner mx-auto px-2 bg-background">
      <div className="flex flex-col items-center justify-center mb-4">
        <div className="flex flex-col justify-center w-full mb-4 px-4">
          <h1 className="text-primary text-2xl md:text-4xl font-semibold mb-4 md:mb-6 text-center leading-tight">
            Easily accept online payments on your website or app
          </h1>
          <p className="text-[16px] md:text-[18px] text-center max-w-4xl mx-auto">
            Paybolt payment gateway provides a secure and reliable method of
            accepting online payments for your business. It comes with
            best-in-class features like automated reconciliation, refund
            management, brand and discount coupons for your customers, etc.
          </p>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-12 mb-4">
          <Cards items={MoneyTransferOutlinesConstants} />
        </div>

        <div className="flex items-center justify-center py-16 px-4">
          <h2 className="text-primary text-2xl md:text-4xl font-semibold mb-4 md:mb-6 text-center leading-tight">
            Generate payment links in few simple steps
          </h2>
        </div>

        <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 mb-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="flex flex-col items-center mb-12 md:mb-0 md:w-1/3">
              <Image
                src={createLinkImg}
                width={300}
                height={300}
                quality={100}
                alt="Create payment link"
                className="mb-4"
              />
              <VectorSvg1 className="w-24 h-24  transform" />
              <p className="text-primary text-[16px] font-semibold text-center max-w-[250px]">
                Create payment link via Paybolt payment link dashboard
              </p>
            </div>
            <div className="flex flex-col items-center mb-12 md:mb-0 md:w-1/3 md:mt-16">
              <Image
                src={secCreateLinkImg}
                width={300}
                height={300}
                quality={100}
                alt="Share payment link"
                className="mb-4"
              />
              <VectorSvg2 className="w-24 h-24 " />
              <p className="text-primary text-[16px] font-semibold text-center max-w-[250px]">
                Fill the details and share payment link through SMS, Email and
                WhatsApp
              </p>
            </div>
            <div className="flex flex-col items-center md:w-1/3 md:mt-32">
              <Image
                src={thirdCreateLinkImg}
                width={300}
                height={300}
                quality={100}
                alt="Accept payments"
                className="mb-4"
              />
              <VectorSvg3 className="w-24 h-24  transform -rotate-90" />
              <p className="text-primary text-[16px] font-semibold text-center max-w-[250px]">
                Accept payments easily
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransferOutlines;
