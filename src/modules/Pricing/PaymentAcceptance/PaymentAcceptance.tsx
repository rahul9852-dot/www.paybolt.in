import { BsArrowRight } from "react-icons/bs";

const PaymentAcceptance = () => {
  const points = [
    "Dedicated dashboard with reconciliation features on all products",
    "Coupon feature to offer cashback and discounts",
    "SMS, Email and Whatsapp integration within our APIs",
    "All products for collections will be available at the same price with no extra charges",
    "Payment modes such as Cards (Visa, Master, Maestro, Rupay, Commercial cards), Wallets, UPI and Netbanking, Buy now pay later payment instruments shall be extended"
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full">
        <h1 className="text-center font-semibold mb-16 text-2xl md:text-3xl">Payment Acceptance</h1>
        <p className="text-primary text-sm md:text-base lg:text-lg text-center md:text-left mb-8">
          Paybolt offers customized pricing suitable for every business need. 
          The pricing is applicable for products and features that solve 
          problems around payment collections. Paybolt value proposition 
          is to remove friction after a payment is done. Our products and 
          solutions are focused in creating mechanism around payments 
          where the following is offered –
        </p>
        <div className="grid md:grid-cols-2 gap-8 pt-20">
          <div className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="relative">
                  <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center text-primary font-semibold">
                    {index + 1}
                  </div>
                  {index < points.length - 1 && (
                    <div className="absolute top-8 left-1/2 w-px h-full border-l border-dashed border-primary"></div>
                  )}
                </div>
                <p className="ml-4 text-primary">{point}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="bg-primary-50 rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg p-6 relative w-full max-w-sm">
              <div className="bg-white text-sm p-2 rounded absolute top-0 left-2 m-4">
                Extra Taxes are applicable
              </div>
              <div className="bg-primary text-white p-3 rounded-lg mt-12 mb-4">
                <h2 className="font-semibold text-sm md:text-base mb-4">
                  Customized pricing for
                  <br />
                  every business
                </h2>
              </div>
              <p className="text-primary mb-8 pt-4">Exclusive of GST</p>
              <button className=" btn flex items-center absolute bottom-4 right-4">
                View More <BsArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentAcceptance;