export const cloneDeep = (obj) => {
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  let newObj = new obj.constructor();
  console.log("newObj", newObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log("newObjkey", key);
      newObj[key] = cloneDeep(obj[key]);
    }
  }
  return newObj;
};
