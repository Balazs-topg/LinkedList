/*
  append(value) {} //adds a new node containing value to the end of the list
  prepend(value) //adds a new node containing value to the start of the list
  at(index) //returns the node at the given index
  get size(){} //returns the total number of nodes in the list
  get head(){} //returns the first node in the list
  get tail(){} //returns the last node in the list

  pop() //removes the last element from the list

  insertAt(value, index) //that inserts a new node with the provided value at the given index.
  removeAt(index) //that removes the node at the given index.
  */

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    let tmp = null;
    if (this.head != null) tmp = this.head;
    this.head = new Node(value);
    this.head.next = tmp;
  }

  append(value) {
    if (this.head == null) this.prepend(value);
    else {
      let tmp = this.head;
      while (tmp.next != null) tmp = tmp.next;
      tmp.next = new Node(value);
    }
  }
  at(index) {
    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.next;
      if (tmp == null) return "There is no item for this index";
    }
    return tmp;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    let result = this.at(0);
    return result;
  }
  pop() {}
  get size() {
    let temp = this.head;
    let counter = 0;
    while (temp != null) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }
}
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

myLinkedList = new LinkedList();

myLinkedList.append("appended number 1");
myLinkedList.append("appended number 2");
myLinkedList.prepend("prependeddd");
myLinkedList.append("appended number 3");

console.log(myLinkedList.size);
console.log(myLinkedList.getHead());
console.log(myLinkedList);
