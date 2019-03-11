//New way to declare functions 

//Old way
//You have a name, a list of parameters, and a function body.

function name(parameters) {
   // function body
}

//Anonymous functions

var example = function (parameters) {
	// function body
}

//Arrow function ES6
//Differences with anonymous function 
//Missing function keyword and the => arrow to the right of the parameter list.

var example = (parameters) => {
 // function body
}

//More differences
//-Arrow functions cant be named explicitly
//-They cant be used as constructors 
//-They dont have a prototype property,meaning you cant use new on an arrow function
//-They are bound to their lexical scope,which is the reason why they dont alter the meaning of this





