import { Metadata } from 'next';
import { MetadataRoutes } from '../enums/route.enum';

export const metadataConfig: Partial<Record<MetadataRoutes, Metadata>> = {
  [MetadataRoutes.HOME]: {
    title: 'PayBolt | Payment Gateway | QR Collection | Payout | UPI Payment',
    description: 'PayBolt Technologies - Home',
  },
  [MetadataRoutes.QR_COLLECTION]: {
    title: 'QR Collection | PayBolt',
    description: 'PayBolt Technologies - QR Collection',
  },
  [MetadataRoutes.LOGIN]: {
    title: 'Login | PayBolt',
    description: 'PayBolt Technologies - Login',
  },
  [MetadataRoutes.REGISTER]: {
    title: 'Register | PayBolt',
    description: 'PayBolt Technologies - Register',
  },
  [MetadataRoutes.PRICING]: {
    title: 'Pricing | PayBolt',
    description: 'PayBolt Technologies - Pricing',
  },
};
