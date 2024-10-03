var name = "John"; // function level scope
//This means if a variable is declared with var inside a function, it is only accessible within that function. However, if declared outside any function, it's globally scoped.
//Can be reassigned and redeclared within its scope.

let name = "John"; // block level scope
//These variables are confined to the block they are declared in, such as inside loops, conditionals, or functions.
//Can be reassigned but cannot be redeclared within the same scope.

const name = "John"; // block level scope
//These variables are confined to the block they are declared in, such as inside loops, conditionals, or functions.
//Cannot be reassigned or redeclared. A const variable must be initialized at the time of declaration, and its
//value cannot be changed afterward. However, if the const holds an object or array, the object or array contents can be modified.
