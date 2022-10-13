import VueRouter from 'vue-router';
import { beforeEach } from './guards/beforeEach';

import { routes } from './routes';

const createRouter = () => {
  const router = new VueRouter({ mode: 'hash', base: '/', routes });
  router.beforeEach(beforeEach);
  return router;
};

export { createRouter };
