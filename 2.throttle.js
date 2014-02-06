var counter = 0;
inc = function() {counter++;}

inc = throttle(inc, 10);
// inc = throttle(inc,10);

for(var i =100000;i--;){
	inc();
}

console.log(counter);

function throttle(fn, intervalo){
// function throttle(fn, intervalo){
	// console.log("intervalo es "+intervalo);
	var lastCall = 0;
	return function(){
		var now = Date.now();
		if(now > (lastCall + intervalo)){
			// puedes ejecutar la funcion
			// console.log("SIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII puedes ejecutar la funcion");
			lastCall = now;
			// fn();  // mas cutre que lo de aqui abajo
			return fn.apply(this,arguments);  // asi devuelves lo que devuelva fn() y ademas le pasas los arguments
		}
		else{
			// no puedes ejecutar
			// console.log("NOOOOOOO funcion");

		}
		// console.log(now);
		// if(){

		// }
		// return intervalo;
	};
}