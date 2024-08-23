import Image from "next/image";
import PosDeviceImage from "@public/images/pos-steps.png"; // Replace with your actual image

const PosServiceOutline = () => {
  const features = [
    "Multiple Payment Modes",
    "Secure Transactions",
    "Real-time Reporting",
    "Customer Management",
    "Inventory Tracking",
    "Multi-location Support",
    "Customer Management",
    "Inventory Tracking",
  ];

  return (
    <div className="container mx-auto px-4 py-12 mb-4">
      <h2 className="text-primary text-3xl md:text-4xl font-semibold text-center mb-6 max-w-3xl mx-auto">
        Streamline Your Business Operations with Our Advanced POS System
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Our POS system offers a comprehensive solution for businesses of all sizes, 
        combining cutting-edge technology with user-friendly interfaces to enhance 
        your daily operations and boost customer satisfaction.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <Image
            src={PosDeviceImage}
            alt="POS Device"
            width={500}
            height={500}
          />
          <p className="mt-4 text-center">
            Accept payments from your customers through credit cards, debit cards and dynamic UPI QR code
          </p>
        </div>
        <div className="flex flex-col gap-4 md:self-start">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden"
            >
              <div className="bg-primary-50 text-primary p-4 pl-12 rounded-lg transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <p>{feature}</p>
              </div>
              <div className="absolute left-0 top-0 h-full w-8 bg-primary-50 transition-all duration-300 group-hover:bg-primary group-hover:w-10 group-hover:skew-x-[-10deg] group-hover:translate-x-[-4px]"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PosServiceOutline;