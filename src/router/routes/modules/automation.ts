import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/automation',
  name: 'Automation',
  component: LAYOUT,
  redirect: '/automation/job',
  meta: {
    orderNo: 1993,
    icon: 'ion:settings-outline',
    title: '部署相关',
  },
  children: [
    {
      path: 'view',
      name: 'ViewManagement',
      meta: {
        title: '视图管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/automation/view/index.vue'),
    },
    {
      path: 'job',
      name: 'JenkinsJobManagement',
      meta: {
        title: 'Job管理',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/automation/job/index.vue'),
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
