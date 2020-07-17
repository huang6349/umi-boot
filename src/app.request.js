import { nprogress } from '@/utils';

export default {
  requestInterceptors: [
    function interceptorNprogress(url, options) {
      nprogress.start();
      return { url, options };
    },
  ],
  responseInterceptors: [
    function interceptorNprogress(response) {
      nprogress.done();
      return response;
    },
  ],
};
