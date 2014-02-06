function makeContador(){

	var i=0;
	return function(){
			return i++; // primero devuelve (luego incrementa)
		}
	}

var contador1 = makeContador();
console.log(contador1);  // [Function]
contador1();