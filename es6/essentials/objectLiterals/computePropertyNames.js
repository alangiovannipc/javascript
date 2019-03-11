//Declare objects that contain properties with names based on variable or other javascript expressions
//With computed property names, you can wrap any expression in square brackets, and use that as the property name

//Before
var expertise = 'journalism'
var person = {
	name: 'Sharon',
	age: 27
}
person[expertise] = {
	years: 5,
	interests: ['international', 'politics', 'internet']
}

//Now

var expertise = 'journalism'
var person = {
        name: 'Sharon',
        age: 27,
	[expertise]: {
		years: 5,
		interests: ['international', 'politics', 'internet']
	}
}


//GOOD use
funtion getEnvelope(type, description) {
	return {
	  data: {},
	  [type]: description
	}
}
