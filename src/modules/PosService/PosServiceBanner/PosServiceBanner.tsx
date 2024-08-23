import Image from "next/image";
import PosBannerBg from "@public/images/pos-background.png";
import PosScanner from "@public/images/pos-scanner.png"; 

const PosServiceBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-4">
      <div className="flex justify-center md:justify-start w-full md:w-1/2 mb-8 md:mb-0 relative">
        <Image
          src={PosBannerBg}
          height={600}
          width={600}
          alt="POS Device illustration"
          className="max-w-full h-auto z-[999] py-10"
        />
        <Image
          src={PosScanner}
          height={400}
          width={350} 
          alt="Overlay illustration"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000]"
        />
      </div>
      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 px-4 md:px-8 lg:px-16 py-8">
        <div className="w-full max-w-md container mx-auto px-2">
          <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center md:text-left">POS Devices</h1>
          <p className="text-[16px] md:text-[18px] text-center md:text-left mb-4">
          Paybolt payment gateway provides a secure and reliable method of accepting online payments          </p>
          <button className="btn mb-4">
          Sign Up for Free          
          </button>
        </div>
      </div>
    </div>
  )
}

export default PosServiceBanner;