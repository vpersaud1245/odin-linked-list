import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) this.head = newNode;
    else {
      let currentNode = this.head;
      let endFound = false;
      while (endFound === false) {
        if (currentNode.link === null) {
          currentNode.link = newNode;
          endFound = true;
        } else {
          currentNode = currentNode.link;
        }
      }
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }
    this.head = new Node(value, this.head);
  }

  size() {
    let sum = 0;
    if (this.head === null) return sum;
    let endFound = false;
    let currentNode = this.head;
    while (!endFound) {
      sum += 1;
      if (currentNode.link === null) {
        endFound = true;
        return sum;
      }
      currentNode = currentNode.link;
    }
  }

  toString() {
    let linkedListString = "";
    if (this.head === null) {
      linkedListString += "null";
      console.log(linkedListString);
    } else {
      let currentNode = this.head;
      let endFound = false;
      while (endFound === false) {
        linkedListString += `(${currentNode.value}) -> `;
        if (currentNode.link === null) {
          linkedListString += "null";
          console.log(`\n ${linkedListString} \n`);
          endFound = true;
        } else {
          currentNode = currentNode.link;
        }
      }
    }
  }
}
