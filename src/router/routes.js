
const routes = [
  {
    path: "/",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      { path: "", component: () => import("pages/home.vue") },
      { path: "/dashboard", component: () => import("pages/Dashboard.vue") },
    ],
  },

  {
    path: "/User",
    component: () => import("layouts/Login.vue"),
    children: [
      { path: "login", name:'loginPage', component: () => import("pages/login.vue") },
      { path: "signup", name: 'signupPage', component: () => import("pages/signup.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes
