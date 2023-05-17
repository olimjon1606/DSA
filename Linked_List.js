function isPalindrome(head) {
  if (!head || !head.next) {
    return true;
  }

  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow.next;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  let p1 = head;
  let p2 = prev;
  while (p2) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
}