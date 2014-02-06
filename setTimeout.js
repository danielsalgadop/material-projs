// el ORDEN en el codigo NO ES el orden de ejecuccion
// esto se parece a ejecutar algo en background

// jugeteando con setTimeout(function, milliseconds);
var timerId = setTimeout(function(){
	console.log("primero => terceror");
}, 1000);

// clearTimeout(timerId);

console.log("medio => primero");

setTimeout(function(){
	console.log("final => segundo");
}, 1);
