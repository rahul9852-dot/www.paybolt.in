import Image from "next/image";
import PricingBannerImg from "@public/images/Pricing-Banner.png";
import { BiArrowFromRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import CheckMarkIcon from "@public/Icons/CheckMarkIcon";
import { FaCheckCircle } from "react-icons/fa";
const PricingBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-4">
      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-md container mx-auto px-2">
          <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-6 text-center md:text-left">
            Start accepting payments at just
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-center md:text-left mb-6 md:mb-4">
            Paybolt payment gateway provides a secure and reliable method of
            accepting online payments
          </p>
          <button className="btn flex items-center justify-center w-full md:w-auto">
            <span className="mr-2">Sign Up for Free</span>
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0 px-16 mb-4">
        <div className="relative w-[400px] h-[400px] ">
          <Image
            src={PricingBannerImg}
            layout="fill"
            objectFit="contain"
            alt="Contact illustration"
          />
          <div className="absolute inset-0 flex items-center justify-center top-24">
            <FaCheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBanner;
