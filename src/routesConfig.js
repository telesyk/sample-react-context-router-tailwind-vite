export const routesConfig = [
  {
    path: '/',
    name: 'Home',
    navigation: true,
  },
  {
    path: '/about',
    name: 'About',
    navigation: true,
  },
  {
    path: '/*',
    name: 'NotFound',
    navigation: false,
  },
];
