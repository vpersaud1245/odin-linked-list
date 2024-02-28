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

console.log("-----");
console.log(list.at(0));
console.log(list.at(3));
console.log(list.at(5)); // Err
console.log(list.at(-1));
console.log(list.at(4));

console.log("-----");
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
