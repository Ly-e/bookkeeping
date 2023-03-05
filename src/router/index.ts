import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '@/views/Index.vue'
import KeepOne from '@/views/KeepOne.vue'
import StatisticsPage from '@/views/StatisticsPage.vue'
import DetailsPage from '@/views/DetailsPage.vue'
import NotFound from '@/views/NotFound.vue'
import EditPage from '@/views/EditPage.vue'
import AddTags from '@/views/AddTags.vue'
import LabelDetails from '@/views/LabelDetails.vue'
import LabelStatistics from '@/views/LabelStatistics.vue'
import CreateTag from '@/views/CreateTag.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/keepone',
    name: 'KeepOne',
    component: KeepOne
  },
  {
    path: '/details',
    name: 'DetailsPage',
    component: DetailsPage
  },
  {
    path: '/statistics',
    name: 'StatisticsPage',
    component: StatisticsPage
  },
  {
    path: '/edit',
    name: 'EditPage',
    component: EditPage
  },
  {
    path: '/addtags',
    name: 'AddTags',
    component: AddTags
  },
  {
    path: '/labeldetails',
    name: 'LabelDetails',
    component: LabelDetails
  },
  {
    path: '/labelstatistics',
    name: 'LabelStatistics',
    component: LabelStatistics
  },
  {
    path: '/createtag',
    name: 'CreateTag',
    component: CreateTag
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
