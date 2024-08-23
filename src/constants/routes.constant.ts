import ColorFullIcon from '@public/Icons/ColorFullIcon';
import WaterMarkIcon from "@public/images/watermark.svg"
export const routes = [
  {
    name: 'Home',
    path: '/',
    Icon: ColorFullIcon,
    isNameDisabled: true,
  },
  {
    name: 'Products',
    path: '/products',
    innerProducts: [
      {
        name: 'UPI QR Collection',
        path: '/products/upi-qr-collections',
      },
      {
        name: 'Money Transfer',
        path: '/products/money-transfer',
      },
      {
        name: 'POS Devices',
        path: '/products/pos-devices',
      },
      {
        name: 'Dynamic QR Collection',
        path: '/products/dynamic-qr-collections',
      },
      {
        name: 'Instant Banking',
        path: '/products/instant-banking',
      },
    ],
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
  {
    name: 'Contact Us',
    path: '/contact',
  },
];
