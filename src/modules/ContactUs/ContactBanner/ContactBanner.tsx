import Image from "next/image";
import ContactImg from "@public/images/contactImg.png"

const ContactBanner = () =>{
  return (
    <div className="grid grid-cols-2 gap-8 items-center contact-banner">
      <div className="flex flex-col items-start justify-center ml-40">
        <div className="w-full max-w-md">
          <h1 className="text-primary text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-[18px]">
            Paybolt payment gateway provides a secure and reliable method of accepting online payments.
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <Image
          src={ContactImg}
          height={500}
          width={500}
          alt="Contact illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  )
}

export default ContactBanner;