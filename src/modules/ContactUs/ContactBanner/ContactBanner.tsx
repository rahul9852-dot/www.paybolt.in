import Image from "next/image";
import ContactImg from "@public/images/contactImg.png";

const ContactBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-4">
      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 px-4 md:px-8 lg:px-16 py-8">
        <div className="w-full max-w-md container mx-auto px-2">
          <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center md:text-left">
            Contact Us
          </h1>
          <p className="text-[16px] md:text-[18px] text-center md:text-left">
            Paybolt payment gateway provides a secure and reliable method of
            accepting online payments.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0">
        <Image
          src={ContactImg}
          height={400}
          width={400}
          alt="Contact illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ContactBanner;
