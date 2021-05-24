/**
 * 实现new方法 可以调用它来返回一个实例对象
 *
 */

const ownNew = (...args) => {
  let obj = {};
  obj.__proto__ = args.shift().prototype;
  let res = fn.call(obj, ...args);
  return res instanceof Object ? res : obj;
};
