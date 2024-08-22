import Image from "next/image";
import MoneyTransferImg from "@public/images/money-transfer-banner.png"

const MoneyTransferBanner = () => {
      return (
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 px-4 md:px-8 lg:px-16 py-8">
            <div className="w-full max-w-md container mx-auto px-2">
              <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center md:text-left">Money Transfer</h1>
              <p className="text-[16px] md:text-[18px] text-center md:text-left mb-4">
                Paybolt payment gateway provides a secure and reliable method of accepting online payments
              </p>

              <button className="btn mb-4">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src={MoneyTransferImg}
              height={600}
              width={600}
              alt="Contact illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      )
}

export default MoneyTransferBanner;