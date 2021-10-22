import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/cluster',
  name: 'Cluster',
  component: LAYOUT,
  redirect: '/cluster/node',
  meta: {
    orderNo: 11,
    icon: 'ion:settings-outline',
    title: '集群管理',
  },
  children: [
    {
      path: 'node',
      name: 'NodeManagement',
      meta: {
        title: '集群节点',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/cluster/node/index.vue'),
    },
    {
      path: 'namespace',
      name: 'NamespaceManagement',
      meta: {
        title: '命名空间',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/cluster/namespace/index.vue'),
    },
    // {
    //   path: 'config',
    //   name: 'ConfigManagement',
    //   meta: {
    //     title: '配置管理',
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/config/role/index.vue'),
    // },
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
