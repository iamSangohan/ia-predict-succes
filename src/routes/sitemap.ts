// import paths from 'routes/paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

// Toutes les routes du sites sont là
const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Tableau de bord',
    path: '/',
    icon: 'ri:dashboard-fill',
    active: true,
  },
  {
    id: 'activity',
    subheader: 'Gestion des etudiants',
    path: '/students',
    icon: 'ic:baseline-show-chart',
  },
  // {
  //   id: 'notification',
  //   subheader: 'Notification',
  //   path: '/notification',
  //   icon: 'ic:baseline-notifications',
  // },
  {
    id: 'library',
    subheader: 'Recommandations',
    path: '/recommandation',
    icon: 'material-symbols:local-library-outline',
  },
  // {
  //   id: 'authentication',
  //   subheader: 'Authentication',
  //   icon: 'ic:round-security',
  //   active: true,
  //   items: [
  //     {
  //       name: 'Sign In',
  //       pathName: 'signin',
  //       path: paths.signin,
  //     },
  //     {
  //       name: 'Sign Up',
  //       pathName: 'signup',
  //       path: paths.signup,
  //     },
  //   ],
  // },
  // {
  //   id: 'schedules',
  //   subheader: 'Schedules',
  //   path: '#!',
  //   icon: 'ic:outline-calendar-today',
  // },
  // {
  //   id: 'payouts',
  //   subheader: 'Payouts',
  //   path: '#!',
  //   icon: 'material-symbols:account-balance-wallet-outline',
  // },
  // {
  //   id: 'settings',
  //   subheader: 'Settings',
  //   path: '#!',
  //   icon: 'ic:outline-settings',
  // },
];

export default sitemap;
