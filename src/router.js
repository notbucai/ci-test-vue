import Vue from 'vue';
import Router from 'vue-router';
import A from '@/views/A.vue'
import B from '@/views/B.vue'
import C from '@/views/C.vue'

Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [
    {
      name: "a",
      path: '/a',
      component: A
    },
    {
      name: "b",
      path: '/b',
      component: B
    },
    {
      name: "c",
      path: '/c',
      component: C
    }
  ]
});
