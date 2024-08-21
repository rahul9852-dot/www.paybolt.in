import logoColorFull from '@public/images/logos/color-full.svg';

export const routes = [
  {
    name: 'Home',
    path: '/',
    image: logoColorFull as string,
    isNameDisabled: true,
  },
  {
    name: 'Products',
    path: '/products',
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
