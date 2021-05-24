/**
 * 防抖
 * 使用场景：input框输入优化，每次输入是都去请求会浪费资源，使用防抖当用户停止输入多少毫秒后才会发起请求
 */
const debounce = (cb, delay) => {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    const context = this;
    timer = setTimeout(() => {
      cb.apply(context, ...args);
    }, delay);
  };
};
