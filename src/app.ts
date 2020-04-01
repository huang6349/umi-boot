import { RequestConfig } from 'umi';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export const request: RequestConfig = {
  middlewares: [
    async (ctx, next) => {
      NProgress.start();
      NProgress.inc();
      next();
      NProgress.done();
    },
  ],
};
