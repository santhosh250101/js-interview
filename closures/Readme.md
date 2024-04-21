# closure is an inner function that has access to the outer (enclosing) function's variables—scope chain—even after the outer function has finished executing. Closures allow you to access and manipulate outer scope variables from within an inner function.

##
function outerFunction() {
    const outerVar = 'I am outer';

    function innerFunction() {
        console.log(outerVar); // Accessing outerVar from the outer function's scope
    }

    return innerFunction; // Returning the inner function
}

const closure = outerFunction();
closure(); // Output: 'I am outer'


##

##
In this example:

outerFunction defines a variable outerVar and declares an inner function innerFunction.
innerFunction can access outerVar even after outerFunction has finished executing. This is possible because innerFunction forms a closure over the scope of outerFunction.
When outerFunction is called, it returns innerFunction, and we store this returned function in the variable closure.
Finally, when closure is invoked, it still has access to the outerVar variable due to the closure formed during the creation of innerFunction.
Closures are commonly used in JavaScript for maintaining state, creating private variables, and implementing various design patterns like the Module Pattern.
##

## closure applications

# Closures are often used to create private variables and methods within an object. By using closures, you can encapsulate data and functionality, exposing only the necessary parts while keeping the rest inaccessible from the outside.

# Closures are instrumental in implementing the Module Pattern, a design pattern for creating encapsulated modules with private and public members.
