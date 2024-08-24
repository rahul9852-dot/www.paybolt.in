import { BenefitCard } from "@/components/BenefitCard";
import { GradientCard } from "@/components/GradientCard";
import { MoneyTransferBenefitsConstant, MoneyTransferFeaturesCardConstants } from "@/constants/money-transfer.constant";
import { CgArrowRight } from "react-icons/cg";

const MoneyTransferFeatures = () => {
  return (
    <div className="money-transfer-features-banner">
      <div className="features-content">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-primary text-2xl md:text-4xl font-semibold mb-8 text-center leading-tight max-w-3xl mx-auto">
            Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {MoneyTransferFeaturesCardConstants.map(feat => (
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
          {MoneyTransferBenefitsConstant.map((benefits, idx) => (
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
  )
}

export default MoneyTransferFeatures;