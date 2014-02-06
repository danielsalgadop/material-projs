var counter = 0,
inc = function() {
	counter++;
};

// inc = afterProfe(inc, 1000);  // funciona 100
inc = after(inc, 1000);  // NO funciona 100000

for (var i=100000; i--;) {
	inc();
}
console.log(counter);

// no funciona (console.log(counter)) acaba en 1000
function after(fn, interval){
	contador_ejecucion = 0;
	return function(){
		fn();
		// console.log("message");
	}
}

function afterProfe(fn,times){
	var n = 0;
	return function(){
		if(++n == times){
			n= 0;
			return fn.apply(this, arguments);
		}
	}
}