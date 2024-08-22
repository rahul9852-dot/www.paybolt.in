
import BasketSvg from "@public/images/logos/Basket.svg";
import IncreaseSvg from "@public/images/logos/Increase.svg";
import SettingsSvg from "@public/images/logos/Settings.svg";
import MagneticCardSvg from '@public/images/logos/Magnetic-Card.svg';
import PerformanceMackBookSvg from '@public/images/logos/Performance-Macbook.svg';
import OnlineSupportSvg from "@public/images/logos/Online-Support.svg";
import QuickModeSvg from "@public/images/logos/QuickMode.svg"
import SalePriceSvg from "@public/images/logos/SalePriceTag.svg"
import CheckLockSvg from "@public/images/logos/CheckLock.svg";
import CustomerSupportSvg from "@public/images/logos/CustomerSupport.svg"
interface CardItem {
  icon?: string;
  title: string;
  description: string;
}

interface CardFeatures{
  icon: string;
  title: string;
  description: string;
}
export const MoneyTransferOutlinesConstants:CardItem[]=[
  {
    icon:MagneticCardSvg,
    title:"100+ payment options",
    description:"Accept payments through credit cards, debit cards, UPI, wallets, EMI & BNPL with Easebuzz payment gateway"
  },
  {
    icon:IncreaseSvg,
    title:"Best payment success rate",
    description:"Higher payment success rates for enhanced customer experience and improved business revenues"
  },
  {
    icon:SettingsSvg,
    title:"Easy integration",
    description:"Developer friendly APIs and plugins to ease the integration process supported by detailed API documentation"
  },
  {
    icon:BasketSvg,
    title:"IFrame checkout",
    description:"Embed the hosted checkout page on your website or app easily and offer seamless checkouts for your customers"
  },
  {
    icon:PerformanceMackBookSvg,
    title:"Unified dashboard",
    description:"Dashboard with real-time transaction data, customisable reports, and detailed payment insights"
  },
  {
    icon:OnlineSupportSvg,
    title:"Dedicated technical support",
    description:"24*7 technical support to help you with your integrations and any queries"
  }
];


export const MoneyTransferFeaturesCardConstants: CardFeatures[] =[
  {
    icon:QuickModeSvg,
    title:'Instant Transfers',
    description:'Transfer money instantly across accounts.'
  },
  {
    icon:SalePriceSvg,
    title:'Low Fees',
    description:'Enjoy competitive fees for all transactions Transfer money instantly across accounts.'
  },
  {
    icon:CheckLockSvg,
    title:'Secure Transfers',
    description:'Our service ensures all transactions are secure and encrypted.'
  },
  {
    icon:CustomerSupportSvg,
    title:'Multi-platform Support',
    description:'Send and receive money using mobile, web, or API integrations.'
  },
]



