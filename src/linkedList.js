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
    // Create Node to be appended
    const newNode = new Node(value);
    // Set headNode to new node if list is empty
    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }
    // Iterate through list until the end is found
    let currentNode = this.headNode;
    while (currentNode.link != null) {
      currentNode = currentNode.link;
    }
    // link the last element to the new element
    currentNode.link = newNode;
  }

  /**
   * Adds a new node containing value to the start of the list
   * @param {*} value
   */
  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }

  /**
   *
   * @returns The total number of nodes in the list
   */
  size() {
    let listSize = 0;

    // If list is empty return 0
    if (this.headNode === null) return listSize;

    // Set current node to the head node and add one to the list size
    let currentNode = this.headNode;
    listSize += 1;

    // Iterate through list and add 1 to list size for each node
    while (currentNode.link != null) {
      listSize += 1;
      currentNode = currentNode.link;
    }
    return listSize;
  }

  /**
   *
   * @returns first node in the list, null if list is empty
   */
  head() {
    return this.headNode;
  }

  /**
   *
   * @returns The last node in the list, null if empty
   */
  tail() {
    // Return null if list is empty
    if (this.headNode === null) return null;

    // Iterate to end of the list and return the last node
    let currentNode = this.headNode;
    while (currentNode.link != null) {
      currentNode = currentNode.link;
    }
    return currentNode;
  }

  /**
   *
   * @param {*} index
   * @returns The node at the given index
   */
  at(index) {
    // Log message if index is not within the list
    if (index < 0 || index >= this.size()) {
      return "Index out of Bounds";
    }

    // Iterate to index and return the node
    let currentNode = this.headNode;
    for (let i = 0; i < index; i += 1) {
      currentNode = currentNode.link;
    }
    return currentNode;
  }

  /**
   *
   * Removes the last element from the list
   */
  pop() {
    const listSize = this.size();
    if (listSize === 0) {
      console.log("List is empty");
      return;
    }

    // Update head node if list size is 1
    if (listSize === 1) {
      this.headNode = null;
      return;
    }

    // Remove link on second to last node
    const secondToLastNode = this.at(listSize - 2);
    secondToLastNode.link = null;
  }

  /**
   *
   * @param {*} value
   * @returns True if the passed in value is in the list and otherwise returns false.
   */
  contains(value) {
    const listSize = this.size();
    let currentNode = this.headNode;

    // Iterate thorough list and return true if value is found
    for (let i = 0; i < listSize; i += 1) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.link;
    }
    return false;
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
