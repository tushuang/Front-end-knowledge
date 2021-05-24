/**
 * 节流
 * 使用场景：高频事件触发时节流，比如滑动滚动条触发回调函数，可以改成每n秒触发一次
 */
const throttle = (cb, delay) => {
  let timer = null;
  return function (...args) {
    //args可能是浏览器时间实例 event
    if (!timer) {
      const context = this;
      timer = setTimeout(() => {
        timer = null;
        cb.apply(context, args);
      }, delay);
    }
  };
};

const throttle = (cb, delay) => {
  let timer = 0;
  return () => {
    if (timer - Date.now() >= delay) {
      cb();
      timer = Date.now();
    }
  };
};

let cb = (ddd) => {
  console.log(ddd);
};
onclick(throttle(cb, 3000));
