import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Signin from '../views/Signin.vue'
import Employee from '../views/Employee.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    meta: { requiresAuth: false, requiresAdmin: false }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true, requiresAdmin: false }
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'NotFound' },
  },
  {
    path: '/employee/invite/:id',
    name: 'Employee',
    component: Employee,
    meta: { requiresAuth: false, requiresAdmin: false },
    beforeEnter: async (to, from, next) => {
      const token = to.params.id;
      console.log(token)
      if (token) {
        try {
          await store.dispatch('employee/Invitationcheck', token)
          .then(() => {
            if(!store.getters['employee/checkInvitation']) {
              next({ name: 'NotFound' });
            } else {
              next()
            }
          })
        } catch (error) {
          next({
            name: 'NotFound',
          });
        }
      }
    },
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// permission access
router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth
  const requiresAdmin = to.meta.requiresAdmin
  const authenticated = store.getters['auth/authenticated']
  const isAdmin = store.getters['auth/isadmin']

  if (requiresAuth && !authenticated) {
    next({
      name: 'Signin',
      query: { redirect: to.fullPath },
    })
  } else if (requiresAdmin && !isAdmin) {
    next({
      name: 'Profile',
    })
  } else {
    next()
  }
})

export default router