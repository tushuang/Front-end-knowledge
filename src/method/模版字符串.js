/**
 * test: templateString('${name} is a ${job}。',{name:'lily',job:'doctor'})
 */
const templateString = (str, fields) => {
  let handledStr = str;
  for (n in fields) {
    handledStr = handledStr.replace("${" + n + "}", fields[n]);
  }
  return handledStr;
};
