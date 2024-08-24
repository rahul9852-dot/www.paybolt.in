import { AiFillThunderbolt } from 'react-icons/ai';
import { FaMoneyBills } from 'react-icons/fa6';
import { IoIosCard } from 'react-icons/io';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import { PiChartPieSliceFill } from 'react-icons/pi';
import { SiGoogleforms } from 'react-icons/si';

export const PRODUCTS_FEATURES = [
  {
    title: 'Payment Gateway',
    feat1:
      'Robust, easy, developer-friendly API plugins for faster integration',

    feat2:
      'A powerful integrated dashboard to provide statistics and reports on payments acceptance and refunds',
    feat3:
      '100+ payment modes including credit card, debit card, 50+ net banking options, UPI & wallets',
    icon: IoIosCard,
  },
  {
    title: 'Payment Links',
    feat1: 'Collect payments through links for booking amount',

    feat2:
      'Create customize payment links on the go and share via Email, SMS or Whatsapp',
    feat3: 'Real time transaction view and automated reconciliation',
    icon: FaMoneyBills,
  },
  {
    title: 'InstaCollect',
    feat1: 'Accept payment via multiple virtual accounts',

    feat2: 'Collect payments via IMPS, NEFT, RTGS & UPI',
    feat3: 'QR based payment option for offline booking payment collections',
    icon: AiFillThunderbolt,
  },
  {
    title: 'SmartPay',
    feat1:
      'Pre-payment and post-payment page options to display property information',

    feat2: 'Customizable payment page with company logo and message template',
    feat3: 'DIY form fields to collect data from customers on the payment page',
    icon: MdOutlineQrCodeScanner,
  },
  {
    title: 'Forms',
    feat1:
      'Drag and drop field values with validation used for collecting data from customers',

    feat2:
      'Integrated with API-based payment gateway use for specific property booking/ token acceptance',
    feat3: 'Smart dashboard for reports and analysis',
    icon: SiGoogleforms,
  },
  {
    title: 'Slices',
    feat1: 'Split payment on every transactions',

    feat2: 'Instant settlement of funds to different Bank accounts',
    feat3: 'Auto-reconciliation on transaction status through webhook',
    icon: PiChartPieSliceFill,
  },
];
