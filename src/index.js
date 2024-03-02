/* eslint-disable no-console */
import LinkedList from "./linkedList";

const list = new LinkedList();

console.log("\n----- PREPEND TESTING -----");
console.log("Current Linked List:");
list.toString();
console.log("Prepend 0");
list.prepend("0");
list.toString();
console.log("Prepend -1");
list.prepend("-1");
list.toString();
console.log("Prepend -2");
list.prepend("-2");
list.toString();
console.log("------------------------------------\n\n");

console.log("\n----- APPEND TESTING -----");
list.pop();
list.pop();
list.pop();
console.log("Current Linked List:");
list.toString();
console.log("Append 1");
list.append("1");
list.toString();
console.log("Append 2");
list.append("2");
list.toString();
console.log("Append 3");
list.append("3");
list.toString();
console.log("Append 4");
list.append("4");
list.toString();
console.log("------------------------------------\n\n");

console.log("\n----- HEAD TESTING -----");
console.log("Current Linked List:");
list.toString();
console.log("Head:", list.head());
console.log("Head of an empty list: ");
const emptyList = new LinkedList();
emptyList.toString();
console.log("Head: ", emptyList.head());
console.log("------------------------------------\n\n");

console.log("\n----- TAIL TESTING -----");
console.log("Current Linked List:");
list.toString();
console.log("Tail:", list.tail());
console.log("Tail of empty list:", emptyList.tail());
list.pop();
list.pop();
list.toString();
console.log("Tail of 2 nodes", list.tail());
list.pop();
list.toString();
console.log("Tail of 1 node", list.tail());
console.log("------------------------------------\n\n");

console.log("\n----- SIZE TESTING -----");
console.log("Current Linked List:");
list.toString();
console.log("Size of an empty list:", emptyList.size());
console.log("Size of the current list:", list.size());
list.append("2");
list.append("3");
list.append("4");
console.log("Append some elements");
list.toString();
console.log("Size of current list:", list.size());
console.log("------------------------------------\n\n");

console.log("\n----- LIST AT INDEX TESTING -----");
console.log("Current Linked List:");
list.toString();
console.log("Node at index 0:", list.at(0));
console.log("Node at index 3:", list.at(3));
console.log("Node at index 5:", list.at(5)); // Err
console.log("Node at index -1:", list.at(-1));
console.log("Node at index 4:", list.at(4));
console.log("------------------------------------\n\n");

console.log("\n----- POP TESTING -----");
console.log("Current Linked List:");
list.toString();
console.log("pop");
list.pop();
list.toString();
console.log("pop");
list.pop();
list.toString();
console.log("pop");
list.pop();
list.toString();
console.log("pop");
list.pop();
list.toString();
console.log("pop");
list.pop();
console.log("------------------------------------\n\n");

// Append to list for testing
list.append("1");
list.append("2");
list.append("3");
list.append("4");
console.log("\n----- CONTAINS VALUE TESTING -----");
console.log("Current Linked List:");
list.toString();
console.log("List contains value 0:", list.contains("0"));
console.log("List contains value 1:", list.contains("1"));
console.log("List contains value 2:", list.contains("2"));
console.log("List contains value -1:", list.contains("-1"));
console.log("List contains value 4:", list.contains("4"));
console.log("------------------------------------\n\n");

// Append to list for testing
list.prepend("-2");
list.append("5");

console.log("\n----- FIND VALUE TESTING -----");
console.log("Current Linked List:");
list.toString();
console.log("Index of value -2", list.find("-2"));
console.log("Index of value 5", list.find("5"));
console.log("Index of value 3", list.find("3"));
console.log("Index of value 0", list.find("0"));
console.log("Index of value -1", list.find("-1"));
console.log("------------------------------------\n\n");

console.log("\n----- INSERT NODE AT INDEX TESTING -----");
console.log("Current Linked List:");
list.toString();
console.log("Insert -3 at index 0");
list.insertAt("-3", 0);
list.toString();
console.log("Insert 6 at index 5");
list.insertAt("6", 5);
list.toString();
console.log("Insert 30 at index 2");
list.insertAt("30", 2);
list.toString();
console.log("------------------------------------\n\n");

console.log("\n----- REMOVE AT INDEX TESTING -----");
console.log("Current Linked List:");
list.toString();
console.log("Remove index 0:");
list.removeAt(0);
list.toString();

console.log("Remove index 3:");
list.removeAt(3);
list.toString();

console.log("Remove index 6:");
list.removeAt(6);
list.toString();

console.log("Remove index 12:");
list.removeAt(12);
list.toString();

console.log("Remove index -2:");
list.removeAt(-2);
list.toString();
console.log("------------------------------------\n\n");
