import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

let isNProgress = !1;

export function start() {
  if (isNProgress) return;
  isNProgress = !0;
  NProgress.start();
  NProgress.inc();
}

export function done() {
  isNProgress = !1;
  NProgress.done();
}

export default { start, done };
