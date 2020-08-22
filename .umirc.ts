import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: 'auth/login/index' },
    {
      path: '/',
      component: 'private/index',
      routes: [
        { path: '/service-places', component: 'private/service-places/index' },
        { path: '/booking', component: 'private/booking/index' },
      ],
    },
  ],
});
