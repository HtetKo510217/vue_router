import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/job/Jobs.vue'
import JobDetails from '../views/job/JobDetails.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/jobs',
    name:'jobs',
    component:Jobs
  },
  {
    path:'/job_details/:id',
    name:'job_details',
    component:JobDetails,
    props:true,
  },
  {
    path:"/:catchAll(.*)",
    component: NotFound
  },
  // redirect 
  {
    path:"/all-jobs",
    redirect:"/jobs"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
