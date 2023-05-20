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
  append(value) {
    let newNode = new Node(value, this.head);
    this.head = newNode;
  }
  prepend(value) {
    let tailNode = this.head;
    while (tailNode.next != null) {
      tailNode = tailNode.next;
    }
    let newNode = new Node(value, null);
    tailNode.next = newNode;
  }
  at(index) {
    let startingNode = this.head;
    for (let i = 0; i < index; i++) {
      startingNode = startingNode.next;
      if (startingNode == null) return "there's no node for this index";
    }
    return startingNode;
  }
  size() {
    let startingNode = this.head;
    let counter = 0;
    while (startingNode != null) {
      counter++;
      startingNode = startingNode.next;
    }
    return counter;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    let tailNode = this.head;
    while (tailNode.next != null) {
      tailNode = tailNode.next;
    }
    return tailNode;
  }
  pop() {
    let almostTailNode = this.head;
    try {
      while (almostTailNode.next.next != null) {
        almostTailNode = almostTailNode.next;
      }
      almostTailNode.next = null;
    } catch {
      this.head = null;
    }
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
myLinkedList.pop();

console.log(myLinkedList);
