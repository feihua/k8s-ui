import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/config',
  name: 'Config',
  component: LAYOUT,
  redirect: '/config/secret',
  meta: {
    orderNo: 1992,
    icon: 'ion:settings-outline',
    title: '配置中心',
  },
  children: [
    {
      path: 'secret',
      name: 'KeyManagement',
      meta: {
        title: '密钥管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/config/secret/index.vue'),
    },
    {
      path: 'configMap',
      name: 'ConfigManagement',
      meta: {
        title: '配置管理',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/config/configmap/index.vue'),
    },
    // {
    //   path: 'role',
    //   name: 'RoleManagement',
    //   meta: {
    //     title: t('routes.demo.system.role'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/config/role/index.vue'),
    // },

    // {
    //   path: 'menu',
    //   name: 'MenuManagement',
    //   meta: {
    //     title: t('routes.demo.system.menu'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/config/menu/index.vue'),
    // },
    // {
    //   path: 'dept',
    //   name: 'DeptManagement',
    //   meta: {
    //     title: t('routes.demo.system.dept'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/config/dept/index.vue'),
    // },
    // {
    //   path: 'changePassword',
    //   name: 'ChangePassword',
    //   meta: {
    //     title: t('routes.demo.system.password'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/config/password/index.vue'),
    // },
  ],
};

export default system;
