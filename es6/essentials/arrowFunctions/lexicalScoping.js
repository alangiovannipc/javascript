//Arrow functions dont create a new scope
//in the body of an arrow function,this, arguments, and super point to the containing scope

//Old way
var timer = {
	seconds: 0,
	start() {
	setTimeout(function () { //Create a new scope, this is pointing to the new scope
 		console.log(this.seconds++)
 		},1000)
	}
}
timer.start();

//Output
NaN

//With arrow function
var timer = {
        seconds: 0,
        start() {
        setTimeout( () => { //this is pointing to the containing scope
                console.log(this.seconds++)
                },1000)
        }
}
timer.start();
//Output
0

//Arrow function as an object literal property

//Using apply that change the this scope
var person1 = {
   name:"Eduard",
   hello() {
	console.log("Hello ",this.name)
   }

}

person1.hello()
//Output Hello Eduard
person1.hello.apply({name:"Pedro"},[])
//Output Hello Pedro

//Using arrow function, this is pointing to the global scope because it is not inside of  another function 

var person2 = {
   name:"Eduard",
   hello: () => {
	console.log("Hello ",this.name)
   }

}

person2.hello()
//Output Hello

//If we created a variable named name and assign for example "Alan"
var name = "Alan"
person2.hello()
//Output Hello Alan

//LEXICAL SCOPE
/*
Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

//Other example
function puzzle() {
	return function () {
	  console.log(arguments) //arguments object refers to the context of the anonymous function
	}
}
puzzle('a','b','c')(1,2,3)

//Using arrow function
function puzzle() {
        return () => {
          console.log(arguments) //arguments object refers to the context of the puzzle function
                                 //Because arrow functions dont create a closure
        }
}
puzzle('a','b','c')(1,2,3)












