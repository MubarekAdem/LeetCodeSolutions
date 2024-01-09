class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        ListNode h, *tail = &h;
        while (head && head->next) {
            auto p = head, q = head->next;
            head = q->next;
            q->next = p;
            tail->next = q;
            tail = p;
        } 
        tail->next = head;
        return h.next;
    }
};