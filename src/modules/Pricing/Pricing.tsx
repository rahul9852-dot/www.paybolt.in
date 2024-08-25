import PaymentAcceptance from './PaymentAcceptance/PaymentAcceptance';
import './Pricing.scss';
import PricingBanner from './PricingBanner/PricingBanner';
import PricingPlan from './PricingPlan/PricingPlan';
const PricingModule = () =>{
  return (
    <>
      <div className="pricing-banner pt-40">
        <PricingBanner/>
      </div>
      <PaymentAcceptance/>
      <PricingPlan/>
    </>
  )
}

export default PricingModule;