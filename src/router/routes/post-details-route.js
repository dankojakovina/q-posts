export const postDetailsRoute = {
  path: 'posts/:id',
  component: () => import('../../pages/PostDetails.vue'),
  meta: {
    preventScrolling: false,
  },
};
