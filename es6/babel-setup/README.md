BABEL
————

$ mkdir my-babel-setup    // Create the folder

$ cd my-babel-setup      // Move to the folder

$ npm init -y           // Configure package.json using the default values provided by npm, instead asking us any questions 

$ npm install --save-dev @babel/core @babel/cli @babel/preset-env // Install the babel setup,cli and the respective present

$ mkdir -p src	// Create the src folder , Where We are gonna put all our source files ,Using the command -p verifies if the folder is already created

$ vim src/example.js	//Create the example.js file and put the next content
    ----------------------------------------------------------------
	var double = value => value * 2   //Using arrow functions
	console.log(double(3)) 
    ----------------------------------------------------------------
$ vim package.json //Edit the package.json and add the next line to the script property and save it

    "build": "babel src --out-dir dist"

$ vim babel.config.js //Create a babel.config.js and put the next code to make the transformation, save the file
    ----------------------------------------------------    
     module.exports = {
            presets: [["@babel/env"]]
	};
    ----------------------------------------------------
$ npm run build //Execute the build sentence located in the package.json file that will create the list folder with the example.js file

$ cat dist/example.js //Show the transformation 
  "use strict";

   var double = function double(value) {
      return value * 2;
   };

   console.log(double(3)); 
