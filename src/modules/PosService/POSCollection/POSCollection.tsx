import Image, { StaticImageData } from 'next/image';
import SoundBarQr from "@public/images/soundbar-qr.png";
import StandeeQr from "@public/images/standee-qr.png";

interface CollectionCardProps {
  name: string;
  description: string;
  imageSrc: StaticImageData;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ name, description, imageSrc }) => (
  <div className="bg-primary-50 rounded-lg p-2 flex gap-6 items-center w-full relative max-w-2xl min-h-[200px]">
    <div className="w-1/3 absolute left-6 -top-20 -bottom-12 flex items-end">
      <Image 
        src={imageSrc} 
        alt={name} 
        width={300} 
        height={300} 
      />
    </div>
    <div className="w-2/3 ml-auto pl-8">
      <h3 className="text-xl font-semibold mb-2 text-primary">{name}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const collections = [
  {
    name: "QR Standee",
    description: "UPI QR Standee for your digital payment collection needs.",
    imageSrc: StandeeQr 
  },
  {
    name: "Soundbar",
    description: "Receive instant audio alerts for every payment received with Paybolt Soundbar.",
    imageSrc: SoundBarQr
  }
];

const POSCollection = () => {
  return (
    <div className="pos-collection-container py-16">
      <h2 className="text-primary text-3xl md:text-4xl font-semibold text-center mb-6 max-w-3xl mx-auto">
        Complementing products to accept payments at your store
      </h2>
        <div className="flex items-center justify-center gap-6 mb-10 py-10">
          {collections.map((item, index) => (
            <CollectionCard key={index} {...item} />
          ))}
        </div>
    </div>
  );
};

export default POSCollection;