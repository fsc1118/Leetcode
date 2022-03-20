/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (k === 1) { return head }
    let dummy = new ListNode()
    let prev = dummy
    let pointer = head
    let reverseBetween = (prev, start, end, nextEnd) => {
        let pointer1 = start
        let pointer2 = pointer1.next
        while (pointer1 !== end) {
            let next = pointer2.next
            pointer2.next = pointer1
            pointer1 = pointer2
            pointer2 = next
        }
        prev.next = end
        start.next = nextEnd
    }
    while (pointer !== null) {
        let end = pointer
        for (let i = 0; i < k - 1; i++) {
            end = end.next
            if (end === null) {
                return dummy.next
            }
        }
        reverseBetween(prev, pointer, end, end.next)
        prev = pointer
        pointer = prev.next
    }
    return dummy.next
};