function multiplier(x) {
	return function(y) { return x*y; }
}

var randCien = compose(
	Math.floor,
	multiplier(100),

	Math.random
);
console.log(randCien());


var function compose(){
	var fns = [].slice.call(arguments);
	return function(primerParametro){
		var result = primerParametro;
		for (var i= fns.length(); i>0 ; i--){
			
		}
	}
}

var composeMiaNoFunciona = function(){
	var args = [].slice.call(arguments);

	return function(){

	return (3);
	}
	// for(var i=0;i<arguments.length;i++){
		// if(typeof(arguments[i]) == "Function"){

			// console.log(arguments);
			// return function(){
			// 	console.log("messagexxxxx");
			// }

		// }
	// }
}