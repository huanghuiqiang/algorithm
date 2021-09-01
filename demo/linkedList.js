class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.tail = null;
    this.size = 0;
  }

  insertAtTail(value) {
    let newNode = new Node(value);
    if (this.tail === null) {
      this.tail = newNode;
      this.size++;
      return this;
    }

    let current = this.tail;
    newNode.next = current;
    this.tail = newNode;
    this.size++;
    return this;
  }

  deleteAtIndex(index) {
    if (this.size === 0 || index >= this.size) return undefined;

    let current = this.tail;
    for (let i = 0, l = index; i < l - 1; i++) {
      current = current.next;
    }

    current.next = current.next.next ? current.next.next : null;
    this.size--;
    return this;
  }

  getAtIndex(index) {
    if (this.size === 0 || index >= this.size) return undefined;

    let current = this.tail;

    for (let i = 0, l = index; i < l - 1; i++) {
      current = current.next;
    }

    return current;
  }
}

let link = new SingleLinkedList();

link.insertAtTail(1);
link.insertAtTail(2);
link.insertAtTail(3);
link.insertAtTail(4);
link.insertAtTail(5);


let head = link.getAtIndex(1);

console.log(head);

// 利用递归反转链表
function reverse(head) {
  // base case
  if (head.next === null) return head;
  // 递归的方法
  // 输入一个head节点，将以head为起点的链表反转，返回反转之后的头节点last
  let last = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};


// link.deleteAtIndex(5)


console.log(reverse(head));