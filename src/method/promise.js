/**
 * 实现promise.all方法
 */
const PromiseAll = (promiseArr) => {
  let res = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArr.lenght; i++) {
      promiseArr[i]
        .then((data) => {
          count++;
          res[i] = data;
          if (count === promiseArr.lenght) {
            resolve(res);
          }
        })
        .catch((err) => {
          return reject(err);
        });
    }
  });
};
