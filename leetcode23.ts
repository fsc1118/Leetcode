/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
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
    }
    let divide = (start, end) => {
        if (start === end) {
            return lists[start]
        }
        if (start === end - 1) {

        }
        let mid: number = (start + end) >> 1
        let left = divide(start, mid)
        let right = divide(mid + 1, end)
        return mergeTwoLists(left, right)
    }
    if (lists.length === 0) { return null }
    return divide(0, lists.length - 1)
};