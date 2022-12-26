import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/api',
    name: 'Api',
    component: () => import( '../views/Api.vue')
    },
    {
    path: '/about2',
    name: 'About2',
    component: () => import( '../views/About2.vue')
    },

   {
    path: '/messanger',
    name: 'Api',
    component: () => import( '../views/Messanger.vue')
    },
     {
    path: '/form',
    name: 'form',
    component: () => import( '../views/Form.vue')
    },
      {
    path: '/bootstrap',
    name: 'form',
    component: () => import( '../views/Bootstrap.vue')
    },
      // {
      //   path: "/router",
      //   name: "account",
      //   component: () => import("../views/router/Router.vue"),
        
      //   children: [
      //     {
      //       path: "aViews",
      //       name: "aviews ",
      //       component: () => import("../views/router/routerView/aViews.vue"),
      //     },
      //     {
      //       path: "bViews",
      //       name: "account-settings",
      //       component: () => import("../views/router/routerView/bViews.vue"),
      //     },
      //   ],
      // }
      
       {
         path: '/router',
             component: () => import( '../views/router/Router.vue'),
        children: [
        {
          path: '/',
          component: () => import('../views/router/routerViews/aViews.vue')
        },
        {
          path: 'bViews',
          component: () => import('../views/router/routerViews/bViews.vue')
        }
      ]
    }
      
      // {
      //   path: "/crafted/account",
      //   name: "account",
      //   component: () => import("@/views/crafted/account/Account.vue"),
      //   meta: {
      //     breadcrumbs: ["Crafted", "Account"],
      //   },
      //   children: [
      //     {
      //       path: "overview",
      //       name: "account-overview",
      //       component: () => import("@/views/crafted/account/Overview.vue"),
      //       meta: {
      //         pageTitle: "Overview",
      //       },
      //     },
      //     {
      //       path: "settings",
      //       name: "account-settings",
      //       component: () => import("@/views/crafted/account/Settings.vue"),
      //       meta: {
      //         pageTitle: "Settings",
      //       },
      //     },
      //   ],
      // }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
