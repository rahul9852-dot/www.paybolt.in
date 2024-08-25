import { BenefitCard } from "@/components/BenefitCard";
import { GradientCard } from "@/components/GradientCard";
import {
  PosServiceBeneFits,
  PosServiceConstants,
} from "@/constants/pos-services.constant";
import { CgArrowRight } from "react-icons/cg";

const POSFeature = () => {
  return (
    <div className="pos-features-banner">
      <div className="features-content">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-primary text-2xl md:text-4xl font-semibold mb-8 text-center leading-tight max-w-3xl mx-auto">
            Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {PosServiceConstants.map((feat) => (
              <GradientCard key={feat.title} {...feat} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center py-10">
          <button className="btn !bg-primary !text-white">
            Get Started
            <CgArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto py-10">
          {PosServiceBeneFits.map((benefits, idx) => (
            <BenefitCard
              key={benefits.title}
              title={benefits.title}
              phase={idx}
              description={benefits.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default POSFeature;
