//Syntax 

var example = (parameters) => {
	// function body
}


//Omit parentheses when is exactly one parameter . this is optional

var double = value => {
	return value * 2
}

//Are used for simple functions, the return statement is implicit and there's no need for curly braces

var double = (value) => value * 2

//Combine implicit parentheses and implicit return 
var double = value => value * 2

//Implicit returning object literals
//when you need to implicity return an object literal, you will need to wrap that object literal expression in parentheses.
//Otherwise, the compiler interpret your curly braces as the start and the end of the function block
var objectFactory = () => ({ modular: 'es6' })

//Error
[1,2,3].map(value => { number: value })
// <- [undefined, undefined, undefined]

//Error
[1,2,3].map(value => { number: value, verified: true })
// <- SyntaxError

//Wrapping the expression in parentheses fixes these issues,because the compiler would no longer interpret it as a function block
//Instead, the object declaration becomes an expression that evaluates to the object literal we want to return implicitly
//Good
[1,2,3].map(value => ({ number: value, verified: true }) )








