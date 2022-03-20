/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) { return list2 }
    if (list2 === null) { return list1 }
    let firstPointer: ListNode | null = list1
    let secondPointer: ListNode | null = list2
    let result: ListNode | null = new ListNode()
    let pointer = result
    while (firstPointer !== null && secondPointer !== null) {
        if (firstPointer.val > secondPointer.val) {
            pointer.next = new ListNode(secondPointer.val)
            secondPointer = secondPointer.next
        } else {
            pointer.next = new ListNode(firstPointer.val)
            firstPointer = firstPointer.next
        }
        pointer = pointer.next
    }
    pointer.next = mergeTwoLists(firstPointer, secondPointer)
    return result.next
};