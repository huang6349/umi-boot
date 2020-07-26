import NProgress from 'nprogress';

interface NProgressType {
  isNProgress: boolean;
  start: () => {};
  done: () => {};
}

NProgress.configure({
  showSpinner: !1,
});

export default <NProgressType>{
  isNProgress: !1,
  start() {
    if (this.isNProgress) return;
    this.isNProgress = !0;
    NProgress.start();
    NProgress.inc();
  },
  done() {
    this.isNProgress = !1;
    NProgress.done();
  },
};
