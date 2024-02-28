import Node from "./node";

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

    // this.head.link will go to the next obj check if that is null if not go into
    // that until the link is null then set the null link to the new node
  }
}