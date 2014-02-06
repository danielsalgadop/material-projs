// memoize;
// una especie de cache, para funciones. Guarda el resultado para los parametros

function fact(x) {
if (x == 1) {
	 return 1;
}
	else { return x * fact(x-1); }
}

console.log(fact(100));

// fact = memoize(fact);
// var start = new Date();
// fact(10000);

// console.log(new Date() - start);
// start = new Date();
// fact(10000);

// console.log(new Date() - start);

// function memoize(){
// 	return function(){
// 		return "toe";
// 	}
// }

// function memoizeProfe(fn) {
// 	var cache = {};
// 	return function(p) {
// 		var key = JSON.stringify(p);
// 		if (!(key in cache)) {
// 		cache[key] = fn.apply(this, arguments);
// 	}
// 	return cache[key];
// 	}
// }