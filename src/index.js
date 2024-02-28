/* eslint-disable no-console */
import LinkedList from "./linkedList";

const list = new LinkedList();
console.log(`Head: ${list.head()}`);
console.log("Tail");
console.log(list.tail());
console.log(`size: ${list.size()}`);

list.append("1");
list.append("2");
list.append("3");
list.append("4");
list.toString();
console.log(`size: ${list.size()}`);
console.log("Head");
console.log(list.head());
console.log("Tail");
console.log(list.tail());

list.prepend("0");
list.toString();
console.log(`size: ${list.size()}`);
console.log("Head");
console.log(list.head());
console.log("Tail");
console.log(list.tail());

console.log("\n----- LIST AT INDEX TESTING -----");
console.log("Current Linked List:");
list.toString();
console.log("Node at index 0:", list.at(0));
console.log("Node at index 3:", list.at(3));
console.log("Node at index 5:", list.at(5)); // Err
console.log("Node at index -1:", list.at(-1));
console.log("Node at index 4:", list.at(4));
console.log("------------------------------------\n\n");

list.pop();
list.toString();
list.pop();
list.toString();
list.pop();
list.toString();
list.pop();
list.toString();
list.pop();
list.toString();

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
console.log("Index of value 1", list.find("1"));
console.log("Index of value 2", list.find("2"));
console.log("Index of value 3", list.find("3"));
console.log("Index of value 4", list.find("4"));
console.log("Index of value 0", list.find("0"));
console.log("Index of value -1", list.find("-1"));
console.log("Index of value 5", list.find("5"));
console.log("------------------------------------\n\n");

console.log("\n----- REMOVE AT INDEX TESTING -----");
console.log("Current Linked List:");
list.toString();

console.log("\nBefore: ");
list.toString();
console.log("Remove index 5:");
list.removeAt(5);
list.toString();

console.log("\nBefore: ");
list.toString();
console.log("Remove index 0:");
list.removeAt(0);
list.toString();

console.log("\nBefore: ");
list.toString();
console.log("Remove index 3:");
list.removeAt(3);
list.toString();

console.log("\nBefore: ");
list.toString();
console.log("Remove index 3:");
list.removeAt(3);
list.toString();

console.log("\nBefore: ");
list.toString();
console.log("Remove index -2:");
list.removeAt(-2);
list.toString();

console.log("\nBefore: ");
list.toString();
console.log("Remove index 1:");
list.removeAt(1);
list.toString();
console.log("------------------------------------\n\n");
