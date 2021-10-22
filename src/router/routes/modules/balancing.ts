import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/balancing',
  name: 'Balancing',
  component: LAYOUT,
  redirect: '/balancing/service',
  meta: {
    orderNo: 1991,
    icon: 'ion:settings-outline',
    title: '负载均衡',
  },
  children: [
    {
      path: 'service',
      name: 'ServiceManagement',
      meta: {
        title: '服务代理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/balancing/service/index.vue'),
    },
    {
      path: 'ingress',
      name: 'IngressManagement',
      meta: {
        title: '应用路由',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/balancing/ingress/index.vue'),
    },

    // {
    //   path: 'menu',
    //   name: 'MenuManagement',
    //   meta: {
    //     title: t('routes.demo.system.menu'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/balancing/menu/index.vue'),
    // },
    // {
    //   path: 'dept',
    //   name: 'DeptManagement',
    //   meta: {
    //     title: t('routes.demo.system.dept'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/balancing/dept/index.vue'),
    // },
    // {
    //   path: 'changePassword',
    //   name: 'ChangePassword',
    //   meta: {
    //     title: t('routes.demo.system.password'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/balancing/password/index.vue'),
    // },
  ],
};

export default system;
