import BasketIcon from "@public/Icons/BasketIcon";
import IncreaseIcon from "@public/Icons/Increase";
import SettingsIcon from "@public/Icons/SettingsIcon";
import MagneticCardIcon from "@public/Icons/MagneticCardIcon";
import PMackbookIcon from "@public/Icons/PMackbookIcon";
import OnlineSupportIcon from "@public/Icons/OnlineSupportIcon";
import QuickModeIcon from "@public/Icons/QuickModeIcon";
import SalePriceTagIcon from "@public/Icons/SalePriceTagIcon";
import CheckIcon from "@public/Icons/CheckLock";
import CustomerIcon from "@public/Icons/CustomerSupport";
interface CardItem {

  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  title: string;
  description: string;
}

interface CardFeatures{
  icon:React.FC<React.SVGProps<SVGSVGElement>>
  title: string;
  description: string;
}
export const MoneyTransferOutlinesConstants:CardItem[]=[
  {
    icon:MagneticCardIcon,
    title:"100+ payment options",
    description:"Accept payments through credit cards, debit cards, UPI, wallets, EMI & BNPL with Easebuzz payment gateway"
  },
  {
    icon:IncreaseIcon,
    title:"Best payment success rate",
    description:"Higher payment success rates for enhanced customer experience and improved business revenues"
  },
  {
    icon:SettingsIcon,
    title:"Easy integration",
    description:"Developer friendly APIs and plugins to ease the integration process supported by detailed API documentation"
  },
  {
    icon:BasketIcon,
    title:"IFrame checkout",
    description:"Embed the hosted checkout page on your website or app easily and offer seamless checkouts for your customers"
  },
  {
    icon:PMackbookIcon,
    title:"Unified dashboard",
    description:"Dashboard with real-time transaction data, customisable reports, and detailed payment insights"
  },
  {
    icon:OnlineSupportIcon,
    title:"Dedicated technical support",
    description:"24*7 technical support to help you with your integrations and any queries"
  }
];


export const MoneyTransferFeaturesCardConstants: CardFeatures[] =[
  {
    icon:QuickModeIcon,
    title:'Instant Transfers',
    description:'Transfer money instantly across accounts.'
  },
  {
    icon:SalePriceTagIcon,
    title:'Low Fees',
    description:'Enjoy competitive fees for all transactions Transfer money instantly across accounts.'
  },
  {
    icon:CheckIcon,
    title:'Secure Transfers',
    description:'Our service ensures all transactions are secure and encrypted.'
  },
  {
    icon:CustomerIcon,
    title:'Multi-platform Support',
    description:'Send and receive money using mobile, web, or API integrations.'
  },
]



