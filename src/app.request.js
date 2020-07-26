import { Nprogress } from '@/utils';

export default {
  requestInterceptors: [
    function interceptorNprogress(url, options) {
      Nprogress['start']();
      return { url, options };
    },
  ],
  responseInterceptors: [
    function interceptorNprogress(response) {
      Nprogress['done']();
      return response;
    },
  ],
};
