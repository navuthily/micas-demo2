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
        { path: '/service-places', component: 'private/home/index' },
        { path: '/abc', component: 'private/abc/index' },
      ],
    },
  ],
});

