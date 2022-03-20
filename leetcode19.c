/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

typedef struct ListNode ListNode;
struct ListNode *removeNthFromEnd(struct ListNode *head, int n)
{
    ListNode *first = head;
    ListNode *pointer = head;
    for (int i = 0; i <= n; i++)
    {
        if (pointer == 0)
        {
            return head->next;
        }
        pointer = pointer->next;
    }

    while (pointer != 0)
    {
        pointer = pointer->next;
        head = head->next;
    }
    head->next = head->next->next;

    return first;
}