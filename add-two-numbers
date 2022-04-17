// https://leetcode.com/problems/add-two-numbers/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let num1 = createString(l1);
  let num2 = createString(l2);

  num1 = BigInt(num1) + BigInt(num2);

  num1 = "" + num1;
  console.log(num1);

  return createLinkList([...num1]);
};

const createLinkList = (arr) => {
  let node = null;
  let first = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (node == null) {
      node = new ListNode(arr[i], null);
      first = node;
    } else {
      node.next = new ListNode(arr[i], null);
      node = node.next;
    }
  }
  return first;
};

const createString = (list) => {
  let num1 = "";

  while (list !== null) {
    num1 = list.val + num1;
    list = list.next;
  }

  return num1;
};

// const createArray = (list) => {
//   return [...createString(list)];
// };

// let l1 = createLinkList([9, 9, 9, 9, 9, 9, 9]);
// let l2 = createLinkList([9, 9, 9, 9]);

// l1 = createLinkList([
//   1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 1,
// ]);
// l2 = createLinkList([5, 6, 4]);

// let arr = createArray(addTwoNumbers(l1, l2));

// l1 = createLinkList([2, 4, 3]);
// l2 = createLinkList([5, 6, 4]);

// l1 = createLinkList([1, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
// l2 = createLinkList([9]);

// arr = createArray(addTwoNumbers(l1, l2));

// console.log(arr);
