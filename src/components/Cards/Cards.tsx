import Image from 'next/image';
import PayboltIcon from '@public/images/paybolt-icon.png';

interface CardItem {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface CardsProps {
  items: CardItem[];
}


const Cards: React.FC<CardsProps> = ({ items }) => {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div key={index} className="bg-primary-50 p-6 rounded-lg shadow-md relative overflow-hidden h-[250px] flex flex-col">
          <div className="flex items-center mb-4">
            {item.icon && (
              <item.icon className='w-[40px] h-[40px]' />
            )}
            <h3 className="text-xl font-semibold ml-4">{item.title}</h3>
          </div>
          <p className="text-gray-600 flex-grow">{item.description}</p>
          <div className="absolute right-0 bottom-0 opacity-10">
            <Image src={PayboltIcon} alt="Paybolt" width={80} height={80} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
