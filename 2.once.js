// NO FUNCIONA
// console.lof("message"); deberia ejecutarse solo una vez


function once(fn){
	var ya_ejecutada = 0;
	if(ya_ejecutada == 0){
		ya_ejecutada = 1;
		return function(){
			console.log("message");

		}
	}
}

var counter = 0;
inc = function(){
	counter++;
};

inc = once(inc);

for (var i=100; i--;) {
inc();
}
console.log(counter);

