// https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let node = null;
  let first = null;

  if (list1 === null) return list2;

  if (list2 === null) return list1;

  while (list1 !== null && list2 !== null) {
    let val = null;
    if (list1.val <= list2.val) {
      val = list1.val;
      list1 = list1.next;
    } else {
      val = list2.val;
      list2 = list2.next;
    }
    if (node == null) {
      node = new ListNode(val, null);
      first = node;
    } else {
      node.next = new ListNode(val, null);
      node = node.next;
    }
  }

  while (list1 != null) {
    let val = list1.val;
    list1 = list1.next;
    if (node == null) {
      node = new ListNode(val, null);
      first = node;
    } else {
      node.next = new ListNode(val, null);
      node = node.next;
    }
  }

  while (list2 != null) {
    let val = list2.val;
    list2 = list2.next;
    if (node == null) {
      node = new ListNode(val, null);
      first = node;
    } else {
      node.next = new ListNode(val, null);
      node = node.next;
    }
  }

  return first;
};
