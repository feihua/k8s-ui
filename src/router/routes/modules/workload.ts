import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
// import { t } from '/@/hooks/web/useI18n';

// @ts-ignore
const system: AppRouteModule = {
  path: '/workload',
  name: 'Workload',
  component: LAYOUT,
  redirect: '/workload/deployment',
  meta: {
    orderNo: 1990,
    icon: 'ion:settings-outline',
    title: '工作负载',
  },
  children: [
    {
      path: 'deployment',
      name: 'DeploymentManagement',
      meta: {
        title: '应用部署',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/workload/deployment/index.vue'),
    },
    {
      path: 'statefulSetList',
      name: 'StatefulSetListManagement',
      meta: {
        title: '状态副本',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/workload/statefulset/index.vue'),
    },
    {
      path: 'guardian',
      name: 'GuardianManagement',
      meta: {
        title: '守护进程',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/workload/statefulset/index.vue'),
    },
    {
      path: 'cronJob',
      name: 'CronJobManagement',
      meta: {
        title: '定时任务',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/workload/deployment/index.vue'),
    },
    {
      path: 'pod',
      name: 'PodManagement',
      meta: {
        title: '容器组',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/workload/pod/index.vue'),
    },
    {
      path: 'podLog/:namespace/:name',
      name: 'PodLogDetail',
      meta: {
        hideMenu: true,
        title: t('routes.demo.system.account_detail'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/workload/pod',
      },
      component: () => import('/@/views/workload/pod/PodLogDetail.vue'),
    },
    {
      path: 'podTerminal/:id',
      name: 'PodTerminalDetail',
      meta: {
        hideMenu: true,
        title: t('routes.demo.system.account_detail'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/workload/pod',
      },
      component: () => import('/@/views/workload/pod/PodTerminalDetail.vue'),
    },
    // {
    //   path: 'menu',
    //   name: 'MenuManagement',
    //   meta: {
    //     title: t('routes.demo.system.menu'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/workload/menu/index.vue'),
    // },
    // {
    //   path: 'dept',
    //   name: 'DeptManagement',
    //   meta: {
    //     title: t('routes.demo.system.dept'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/workload/dept/index.vue'),
    // },
    // {
    //   path: 'changePassword',
    //   name: 'ChangePassword',
    //   meta: {
    //     title: t('routes.demo.system.password'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/workload/password/index.vue'),
    // },
  ],
};

export default system;
