import { Metadata } from 'next';
import { MetadataRoutes } from '@/enums/route.enum';

export const metadataConfig: Partial<Record<MetadataRoutes, Metadata>> = {
  [MetadataRoutes.HOME]: {
    title: 'PayBolt | Payment Gateway | QR Collection | Payout | UPI Payment',
    description: 'PayBolt Technologies - Home',
    keywords:
      'PayBolt, Payment Gateway, QR Collection, Payout, UPI Payment, India',
    icons: {
      icon: '/images/logos/paybolt-icon.png',
    },
  },
  [MetadataRoutes.LOGIN]: {
    title: 'Login | PayBolt',
    description: 'PayBolt Technologies - Login',
  },
  [MetadataRoutes.PRICING]: {
    title: 'Pricing | PayBolt',
    description: 'PayBolt Technologies - Pricing',
  },
  [MetadataRoutes.CONTACT_US]: {
    title: 'Contact Us | PayBolt',
    description: 'PayBolt Technologies - Contact Us',
  },
  [MetadataRoutes.PRODUCTS]: {
    title: 'Products | PayBolt',
    description: 'PayBolt Technologies - Products',
  },
  [MetadataRoutes.UPI_QR_COLLECTIONS]: {
    title: 'UPI QR Collections | PayBolt',
    description: 'PayBolt Technologies - UPI QR Collections',
  },
  [MetadataRoutes.MONEY_TRANSFER]: {
    title: 'Money Transfer | PayBolt',
    description: 'PayBolt Technologies - Money Transfer',
  },
  [MetadataRoutes.POS_DEVICES]: {
    title: 'POS Devices | PayBolt',
    description: 'PayBolt Technologies - POS Devices',
  },
  [MetadataRoutes.DYNAMIC_QR_COLLECTIONS]: {
    title: 'Dynamic QR Collections | PayBolt',
    description: 'PayBolt Technologies - Dynamic QR Collections',
  },
  [MetadataRoutes.INSTANT_BANKING]: {
    title: 'Instant Banking | PayBolt',
    description: 'PayBolt Technologies - Instant Banking',
  },
  [MetadataRoutes.PRIVACY_POLICY]: {
    title: 'Privacy Policy | PayBolt',
    description: 'PayBolt Technologies - Privacy Policy',
  },
  [MetadataRoutes.TERMS_AND_CONDITIONS]: {
    title: 'Terms & Conditions | PayBolt',
    description: 'PayBolt Technologies - Terms & Conditions',
  },
};
