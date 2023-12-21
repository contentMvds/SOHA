import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true }  // Indica que esta rota requer autenticação
  },
  {
    path: "/",
    name: "login",
    component: LoginView
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // Verifica se a rota requer autenticação
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('user_token');

    // Se não houver token, redirecionar para a página de login
    if (!token) {
      next('/login');
    } else {
      next();  // Continua para a próxima rota
    }
  } else {
    next();  // Continua para a próxima rota em qualquer caso
  }
});

export default router;
