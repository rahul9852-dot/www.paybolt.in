import {
  AiFillCheckCircle,
  AiFillThunderbolt,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai';
import { BsGraphUpArrow } from 'react-icons/bs';
import { IoIosCard } from 'react-icons/io';
import { IoSettings } from 'react-icons/io5';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { PiGearFine } from 'react-icons/pi';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { TbDeviceAnalytics } from 'react-icons/tb';

export const FEATURES = [
  {
    title: '100+ payment options',
    description:
      'Accept payments through credit cards, debit cards, UPI, wallets, EMI & BNPL with PayBolt payment gateway',
    icon: IoIosCard,
  },
  {
    title: 'Best payment success rate',
    description:
      'Higher payment success rates for enhanced customer experience and improved business revenues',
    icon: BsGraphUpArrow,
  },
  {
    title: 'Easy integration',
    description:
      'Developer friendly APIs and plugins to ease the integration process supported by detailed API documentation',
    icon: PiGearFine,
  },
  {
    title: 'IFrame checkout',
    description:
      'Embed the hosted checkout page on your website or app easily and offer seamless checkouts for your customers',
    icon: RiShoppingBasketLine,
  },
  {
    title: 'Unified dashboard',
    description:
      'Dashboard with real-time transaction data, customizable reports, and detailed payment insights',
    icon: AiOutlineFundProjectionScreen,
  },
  {
    title: 'Dedicated technical support',
    description:
      '24*7 technical support to help you with your integrations and any queries',
    icon: MdOutlineSupportAgent,
  },
];

export const FEAT_BENEFITS = [
  {
    title: 'Secure Transactions',
    description:
      'Enjoy peace of mind with highly secure and encrypted transactions.',
    icon: AiFillThunderbolt,
  },
  {
    title: 'Instant Payment Confirmation',
    description:
      'Get immediate confirmation of payments, ensuring a smooth transaction process.',
    icon: AiFillCheckCircle,
  },
  {
    title: 'Easy Integration',
    description:
      'Seamlessly integrate our UPI QR solutions into your existing systems.',
    icon: IoSettings,
  },
  {
    title: 'Real-time Analytics',
    description:
      'Access real-time analytics to track your sales and customer behavior.',
    icon: TbDeviceAnalytics,
  },
];

export const BENEFITS_CARD = [
  {
    title: 'Payment processing',
    description: 'Enhance customer experience with fast payment processing.',
  },
  {
    title: 'Security',
    description: 'Improve security for all transactions',
  },
  {
    title: 'Multiple payment',
    description: 'Offer multiple payment options to customers',
  },
];
