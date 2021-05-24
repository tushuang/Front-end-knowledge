/**
 * instanceof用于判断当前对象是否是指定数据结构的实例
 * [] instanceof Array
 */

const ownInstanceof = (targetObj, prototype) => {
  let targetPrototype = targetObj.__proto__;
  while (targetPrototype) {
    if (targetPrototype === prototype.prototype) {
      return true;
    }
    targetPrototype = targetPrototype.__proto__;
  }
  return false;
};
