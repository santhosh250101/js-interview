# Scope refers to the visibility and accessibility of variables within your code. In JavaScript, there are two main types of scope:
# local scope and global scope
# Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in your code.
##
    const globalVar = 'I am global';

    function exampleFunction() {
        console.log(globalVar); // Output: 'I am global'
    }

    exampleFunction();
##

# Local Scope: Variables declared within a function or block have local scope. They are only accessible within that function or block.
##
function exampleFunction() {
    const localVar = 'I am local';
    console.log(localVar); // Output: 'I am local'
}

exampleFunction();
// console.log(localVar); // This will throw a ReferenceError because localVar is not defined outside the function.
##