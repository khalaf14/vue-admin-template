import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Home',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'الصفحة الرئيسية', icon: 'dashboard' }
    }]
  },
  {
    path: '/sales',
    component: Layout,
    redirect: '/sales/pump-meters-readings',
    name: 'Sales',
    meta: { title: 'المبيعات', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'pump-meters-readings',
        name: 'Pump Meters Readings',
        component: () => import('@/views/sales/pump-meters-readings/index'),
        meta: { title: 'عدادات المضخات', icon: 'table' }
      },
      {
        path: 'payment-methods',
        name: 'Payment Methods',
        component: () => import('@/views/sales/payment-methodes/index.vue'), // Parent router-view
        meta: { title: 'طرق دفع', icon: 'tree' },
        children: [
          {
            path: 'jocard',
            component: () => import('@/views/sales/payment-methodes/jocard/index.vue'),
            name: 'jocard',
            meta: { title: 'جوكارد' }
          },
          {
            path: 'visa',
            component: () => import('@/views/sales/payment-methodes/visa/index.vue'),
            name: 'Visa',
            meta: { title: 'بطاقات ائتمان' }
          },
          {
            path: 'voucher',
            component: () => import('@/views/sales/payment-methodes/voucher/index.vue'),
            name: 'voucher',
            meta: { title: 'Voucher' }
          }
        ]
      }
    ]
  },

  {
    path: '/inventory',
    component: Layout,
    children: [
      {
        path: 'reading-list',
        name: 'Readings List',
        component: () => import('@/views/inventory/index'),
        meta: { title: 'مخزون الابار', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
