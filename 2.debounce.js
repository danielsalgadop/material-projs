var counter = 0;
inc = function() {counter++;}

inc = debounce(inc, 1000);
// inc = throttle(inc,10);

for(var i =100000;i--;){
	inc();
}

console.log(counter);

function debounce(fn, intervalo){
// function throttle(fn, intervalo){
	// console.log("intervalo es "+intervalo);
	var lastCall = 0;   // solo se inicializa una vez
	return function(){
		var now = Date.now();   // se inicializa en cada llamada inc() dentro de for(var i=10000;i--)
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