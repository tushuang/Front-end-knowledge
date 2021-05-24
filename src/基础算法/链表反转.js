// 1 -> 2 -> 3
const reverse = (list) => {
  let node = null;
  let cur = list;
  while (cur) {
    let next = cur.next;
    cur.next = node;
    node = cur;
    cur = next;
  }
  return node.next;
};
