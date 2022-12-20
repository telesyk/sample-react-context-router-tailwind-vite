const PATH = {
  home: '/',
  about: '/about',
  auth: '/auth',
  login: '/auth/login',
  signup: '/auth/signup',
  notfound: '/*',
};

const ROUTES = [
  {
    path: PATH.home,
    name: 'Home',
    isLogged: true,
  },
  {
    path: PATH.about,
    name: 'About',
    isLogged: true,
  },
  {
    path: PATH.auth,
    name: 'Authentication',
    isLogged: false,
  },
];

const FAKE_PROFILES = [
  {
    id: 1,
    nameSlug: 'user-1',
    firstName: 'User 1',
    lastName: 'Fake',
    email: 'user1@email.com',
    password: '1q2w3e',
    photoUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 2,
    nameSlug: 'user-2',
    firstName: 'User 2',
    lastName: 'Fake',
    email: 'user2@email.com',
    password: '1q2w3e',
    photoUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
  },
];

const USER_STORE_KEY = 'current';

export { PATH, ROUTES, FAKE_PROFILES, USER_STORE_KEY };
