import { createRouter, createWebHistory } from 'vue-router';
import TaskView from '../views/TaskView.vue';
import CategoryView from '../views/CategoryView.vue';

const routes = [
  { path: '/', redirect: '/tasks' },
  { path: '/tasks', component: TaskView },
  { path: '/categories', component: CategoryView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
