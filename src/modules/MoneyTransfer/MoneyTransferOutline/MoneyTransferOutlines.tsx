import Cards from "@/components/Cards/Cards";
import { MoneyTransferOutlinesConstants } from "@/constants/money-transfer.constant";
import SimpleStepsImg from "@public/images/Simple-steps.png"
import Image from "next/image";

const MoneyTransferOutlines = () =>{

  return (
    <div className="mt-10">
        <div className=" flex flex-col items-center justify-center mb-4">
            <div className="flex flex-col justify-center w-full mb-4">
              <h1 className="text-primary text-2xl md:text-4xl font-semibold mb-4 md:mb-6 text-center leading-tight max-w-3xl mx-auto">
                Easily accept online payments on your website or app
              </h1>
              <p className="text-[16px] md:text-[18px] text-center max-w-4xl mx-auto">
                  Paybolt payment gateway provides a secure and reliable method of accepting online payments for your business. It comes with best-in-class features like automated reconciliation, refund management, brand and discount coupons for your customers, etc.
              </p>
            </div>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-4">
              <Cards items={MoneyTransferOutlinesConstants} />
            </div>

            <div className=" flex items-center justify-center py-16 ">
              <h1 className="text-primary text-2xl md:text-4xl font-semibold mb-4 md:mb-6 text-center leading-tight max-w-3xl mx-auto">
                Easily accept online payments on your website or app
              </h1>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
              <Image
                src={SimpleStepsImg}
                alt="Simple steps"
                width={1000}
                height={1000}
                className="w-full h-auto max-w-full"
                priority
              />
            </div>
          <div>
        </div>
      </div> 
    </div>
  )
};

export default MoneyTransferOutlines;