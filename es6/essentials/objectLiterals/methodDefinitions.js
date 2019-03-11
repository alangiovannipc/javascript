//You can declare methods on an object literal using the new method definition syntax.
//We can omit the colon and the function keyword.

//Before

var emitter = {
	on: function (type, fn) {
	  if (this.events[type] === undefined) {
	  	this.events[type] = []
	  }
	}
}

//Now ES6

var emitter = {
        on(type, fn) {
          if (this.events[type] === undefined) {
                this.events[type] = []
          }
        }
}


