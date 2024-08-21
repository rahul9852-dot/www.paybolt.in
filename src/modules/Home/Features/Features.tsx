import { HOME_FEATURES } from '@/constants/common.constant';
import './Features.css';
import Image from 'next/image';

export const Features = () => {
  return (
    <section className="features-wrapper">
      <div className="features">
        <div className="top">
          <span className="all-in-one">ALL-IN-ONE SOLUTION</span>
          <h3 className="text-3xl font-semibold">
            Simplify your business payments with PayBolt
          </h3>
          <p className="text-sm leading-normal max-w-[700px] text-center font-semibold">
            Streamline your business payments with PayBolt. Say goodbye to
            logging into multiple banking platforms to track your receivables
            and payables.
          </p>
        </div>
        <div className="bottom">
          {HOME_FEATURES.map(({ title, description, icon }) => (
            <div key={title} className="feat-card">
              <div className="border-style text-background">
                <div className="flex items-center gap-2">
                  <Image src={icon} width={50} height={50} alt={title} />
                  <h5 className="text-xl font-semibold">{title}</h5>
                </div>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
