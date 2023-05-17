function isPalindrome(head) {
    // Base case: empty or single-node list is always a palindrome
    if (!head || !head.next) {
      return true;
    }
  
    // Find the middle node of the list
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse the second half of the list
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
  
    // If we reach this point, the list is a palindrome
    return true;
  }
  