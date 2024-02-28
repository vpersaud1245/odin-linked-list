import Node from "./node";

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  /**
   * Adds a new node containing value to the end of the list
   * @param {*} value
   */
  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) this.headNode = newNode;
    else {
      let currentNode = this.headNode;
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
    if (this.headNode === null) {
      this.headNode = new Node(value);
      return;
    }
    this.headNode = new Node(value, this.headNode);
  }

  size() {
    let sum = 0;
    if (this.headNode === null) return sum;
    let endFound = false;
    let currentNode = this.headNode;
    while (!endFound) {
      sum += 1;
      if (currentNode.link === null) {
        endFound = true;
      }
      currentNode = currentNode.link;
    }
    return sum;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (this.headNode === null) return null;
    let endFound = false;
    let currentNode = this.headNode;
    while (!endFound) {
      if (currentNode.link === null) {
        endFound = true;
        break;
      }
      currentNode = currentNode.link;
    }
    return currentNode;
  }

  at(index) {
    if (index < 0 || index > this.size() - 1) {
      return "Index out of Bounds";
    }
    let currentNode = this.headNode;
    for (let i = 0; i <= index; i += 1) {
      if (index === 0) {
        break;
      }
      if (index === i) {
        break;
      }
      currentNode = currentNode.link;
    }
    return currentNode;
  }

  pop() {
    if (this.size() === 0) {
      console.log("List is empty");
      return;
    }
    if (this.size() === 1) {
      this.headNode = null;
      return;
    }
    if (this.size() === 2) {
      this.headNode.link = null;
      return;
    }
    const secondToLastIndex = this.size() - 2;
    const elementAtSecondToLastIndex = this.at(secondToLastIndex);
    elementAtSecondToLastIndex.link = null;
  }

  contains(value) {
    let valueFound = false;
    if (this.headNode === null) return valueFound;
    let endFound = false;
    let currentNode = this.headNode;
    while (!endFound) {
      if (currentNode.value === value) {
        valueFound = true;
        break;
      } else if (currentNode.link === null) {
        endFound = true;
      } else {
        currentNode = currentNode.link;
      }
    }
    return valueFound;
  }

  find(value) {
    if (!this.contains(value)) {
      return null;
    }
    let index = 0;
    let currentNode = this.headNode;
    for (let i = 0; i < this.size(); i += 1) {
      if (currentNode.value === value) {
        index = i;
        break;
      }
      currentNode = currentNode.link;
    }
    return index;
  }

  toString() {
    let linkedListString = "";
    if (this.headNode === null) {
      linkedListString += "null";
      // eslint-disable-next-line no-console
      console.log(linkedListString);
    } else {
      let currentNode = this.headNode;
      let endFound = false;
      while (endFound === false) {
        linkedListString += `(${currentNode.value}) -> `;
        if (currentNode.link === null) {
          linkedListString += "null";
          // eslint-disable-next-line no-console
          console.log(`${linkedListString}`);
          endFound = true;
        } else {
          currentNode = currentNode.link;
        }
      }
    }
  }

  /**
   * Inserts a new node with the provided value at the given index.
   * @param {*} value
   * @param {*} index
   */
  insertAt(value, index) {
    const size = this.size();
    if (index < 0 || index > size - 1) {
      console.log("Index out of Bounds");
    }
    const priorIndex = this.at(index - 1);
    const nodeAtCurrentIndex = this.at(index);
    if (index === 0) {
      this.headNode = new Node(value, nodeAtCurrentIndex);
    } else if (index === size - 1) {
      nodeAtCurrentIndex.link = new Node(value);
    } else {
      priorIndex.link = new Node(value, nodeAtCurrentIndex);
    }
  }

  /**
   * Removes the node at the given index.
   * @param {*} index
   */
  removeAt(index) {
    const size = this.size();
    if (index < 0 || index > size - 1) {
      console.log("Index out of Bounds");
      return;
    }
    const priorIndex = this.at(index - 1);
    const postIndex = this.at(index + 1);
    if (index === 0) {
      this.headNode = postIndex;
    } else if (index === size - 1) {
      priorIndex.link = null;
    } else {
      priorIndex.link = postIndex;
    }
  }
}
