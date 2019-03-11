//New syntax reduce complexity in the code and results less verbose to type out

//Before

var listeners = []
function listen() {}
var events = {
	listeners: listeners,
	listen: listen
}

//NOW ES6

var listeners = []
function listen() {}
var events = { listeners,listen }





