import LinkedList from "./linkedList.js";

const list = new LinkedList();
console.log(`size: ${list.size()}`);
list.append("1");
list.append("2");
list.append("3");
list.append("4");
list.toString();
console.log(`size: ${list.size()}`);
list.prepend("0");
list.toString();
console.log(`size: ${list.size()}`);
