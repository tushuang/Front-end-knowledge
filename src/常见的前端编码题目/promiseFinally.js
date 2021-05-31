Promise.prototype.finally = function (cb) {
  return this.then(
    // 利用then 和then有一样的触发时机
    (value) => {
      return Promise.resolve(cb()).then(() => {
        // 执行回调 利用then把之前resolve的参数往后传
        return value;
      });
    },
    (err) => {
      return Promise.resolve(cb()).then(() => {
        throw Error(err);
      });
    }
  );
};
