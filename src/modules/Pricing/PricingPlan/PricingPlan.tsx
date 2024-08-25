import React from 'react';
import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs';

const plans = [
  {
    type: 'Basic',
    price: '₹999',
    features: [
      'Basic UPI QR Collections',
      'Real-time Analytics',
      'Email Support',
      'Secure Transactions',
      'Basic UPI QR Collections',
      'Basic UPI QR Collections',
    ],
    isPrimary: true,
  },
  {
    type: 'Standard',
    price: '₹1999',
    features: [
      'Basic UPI QR Collections',
      'Real-time Analytics',
      'Email Support',
      'Secure Transactions',
      'Basic UPI QR Collections',
      'Basic UPI QR Collections',
    ],
    isPrimary: false,
  },
  {
    type: 'Premium',
    price: '₹2999',
    features: [
      'Basic UPI QR Collections',
      'Real-time Analytics',
      'Email Support',
      'Secure Transactions',
      'Basic UPI QR Collections',
      'Basic UPI QR Collections',
    ],
    isPrimary: true,
  },
];

const PricingPlan: React.FC = () => {
  return (
    <div className="relative py-24 px-4 overflow-hidden mb-16">
      <div className="absolute inset-0 bg-primary-50 clip-path-pricing-left-to-right"></div>
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-12">
          Flexible Pricing Plans For Businesses Of
          <br />
          All Sizes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden relative transform transition-all duration-300 hover:scale-105">
              <div className={`p-6 ${plan.isPrimary ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.type}</h3>
                <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-lg font-normal">/user</span></div>
                <div className="flex items-center text-sm font-medium">
                  <span>Plan Details</span>
                  <BsArrowRight className="ml-2" />
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <BsCheckCircleFill className={`w-5 h-5 mr-3 ${plan.isPrimary ? 'text-primary' : 'text-green-500'}`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <button className={`w-full py-3 px-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                  plan.isPrimary 
                    ? 'bg-primary text-white hover:bg-primary-dark' 
                    : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                }`}>
                  Select Plan
                </button>
              </div>
              {plan.isPrimary && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-primary text-xs font-bold py-1 px-3 rounded-full">
                  Popular
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;