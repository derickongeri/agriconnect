
const routes = [
  {
    path: "/",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      { path: "", component: () => import("pages/Dashboard.vue") },
      { path: "/home", component: () => import("pages/home.vue") },
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
