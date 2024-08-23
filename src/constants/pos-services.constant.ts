import BurstsIcon from "@public/Icons/BurstsIcon";
import CheckIcon from "@public/Icons/CheckLock";
import QuickModeIcon from "@public/Icons/QuickModeIcon";
import UserGroupIcon from "@public/Icons/UserGroup";


interface PosFeatures{
  icon:React.FC<React.SVGProps<SVGSVGElement>>
  title: string;
  description: string;
}


export const PosServiceConstants: PosFeatures[] =[
  {
    icon:QuickModeIcon,
    title:'Fast Transactions',
    description:'Transfer money instantly across accounts. Transfer money instantly across accounts.'
  },
  {
    icon:CheckIcon,
    title:'Secure Transfers',
    description:'Enjoy competitive fees for all transactions Transfer money instantly across accounts.'
  },
  {
    icon:BurstsIcon,
    title:'Secure Transfers',
    description:'Our service ensures all transactions are secure and encrypted.'
  },
  {
    icon:UserGroupIcon,
    title:'Multi-platform Support',
    description:'Send and receive money using mobile, web, or API integrations.'
  },
]


interface PosBenefits{
  title: string;
  description: string;
}

export const PosServiceBeneFits:PosBenefits[]=[
  {
    title: 'Payment processing',
    description:'Enhance customer experience with fast payment processing.',
  },
  {
    title:'Security',
    description:'Improve security for all transactions'
  },
  {
    title:'Multiple payment',
    description:'Offer multiple payment options to customers'
  }
]