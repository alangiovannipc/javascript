$ mkdir -p eslint // Create the folder aslant to implement aslant
$ cd eslint //Move to the eslint folder $ npm init -y //Create a default package.json file without asks any questions.
$ touch app.ja //Create the app.js file to pass the eslint 
$ vim app.js // Write the next code to the app.js for the eslint test

	var goodbye='Goodbye!'

	function hello(){
	 return goodbye}

	if(false){}

$ npm install eslint -D //Install the eslint package and put into the devDepencies properties

$ npx eslint --init //Configure eslint in our project and answer the next questions
	? How would you like to use ESLint? => To check syntax, find problems, and enforce code style
	? What type of modules does your project use? => JavaScript modules (import/export)
	? Which framework does your project use?  => None of these
	? Where does your code run? => Node
	? How would you like to define a style for your project? => Use a popular style guide
	? Which style guide do you want to follow? => Standard (https://github.com/standard/standard)
	? What format do you want your config file to be in? => JSON

$ vim .eslintrc.json 	//Look the .eslintrc.json 
{
     "env": {
        "browser": true,
        "es6": true
     },
     "extends": "standard",
     "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
     },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    }
}

$ vim package.json //Open the package .json file and add the lint script in the next code snippet
	
  "scripts": {
    "lint": "eslint ."
  }

$ npm run lint //ESLINT describe everything that is wrong with the file

  1:12  error  Operator '=' must be spaced         space-infix-ops
  3:10  error  'hello' is defined but never used   no-unused-vars
  3:15  error  Missing space before function parentheses   space-before-function-paren
  3:17  error  Missing space before opening brace                      space-before-blocks
  4:1   error  Expected indentation of 2 spaces but found 1 indent
  4:16  error  Requires a space before '}'                    block-spacing
  4:16  error  Closing curly brace should be on the same line as opening curly brace or on the line after the previous block  brace-style
  6:1   error  Expected space(s) after "if"                keyword-spacing
  6:4   error  Unexpected constant condition               no-constant-condition
  6:10  error  Missing space before opening brace          space-before-blocks

✖ 10 problems (10 errors, 0 warnings)
  8 errors and 0 warnings potentially fixable with the `--fix` option.

$ vim package.json //Add the fix parameter in the script lint property 
 
	 "scripts": {
    		"lint": "eslint . —fix”
 	 }

$ npm run lint // Run the lint script again  3:10  error  'hello' is defined but never used  no-unused-vars
  7:5   error  Unexpected constant condition      no-constant-condition

$ vim app.js  //Fix the error  'hello' is defined but never used 

    var goodbye='Goodbye!'

	function hello(){
	 return goodbye}

	if(false){}         hello()

$ vim app.js  //Fix the error  Unexpected constant condition 

var goodbye='Goodbye!' const MBOOLEAN = false

	function hello(){
	 return goodbye}

	if(MBOOLEAN){}
    hello()

