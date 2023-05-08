
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
const node5 = new Node(5);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);
console.log(reverseLinkedList(node1)); 
function reverseLinkedList(head) {
    let current = head;
    let prev = null;
    let next = null;
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
// let head = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(reverseLinkedList(Node))