/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) { return head }
    let dummy = new ListNode()
    let pointer = head
    let prev = dummy
    while (pointer !== null) {
        let next = pointer.next
        if (next === null) { break }
        let nextNext = next.next
        prev.next = next
        next.next = pointer
        pointer.next = nextNext
        prev = pointer
        pointer = nextNext
    }
    return dummy.next
};