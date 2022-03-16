/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let addition = 0
    let head = l1
    let prevL1 = null
    let prevL2 = null
    while (l1 != null && l2 != null) {
        let sum = l1.val + l2.val + addition
        l1.val = sum % 10
        addition = sum >= 10 ? 1 : 0
        prevL1 = l1
        prevL2 = l2
        l1 = l1.next
        l2 = l2.next
    }
    if (addition === 0) {
        if (l1 == null) {
            prevL1.next = l2
        }
        return head
    }
    if (l1 == null) {
        prevL1.next = addTwoNumbers(new ListNode(1), l2)
    } else {
        prevL1.next = addTwoNumbers(new ListNode(1), l1)
    }
    return head
};