(function(){console.log("funcion anónima autoejecutable");} )();
function funcionMasSimple(){
	console.log("funcionMasSimple");
}

console.log("------------ funcionDevuelve1");
function funcionDevuelve1(){
	// console.log("funcionDevuelve1");
	return 1;
}

//
var toe = funcionDevuelve1;
console.log("concat1"+toe()+"concat1");  // 1     // sí que se ejecuta 
console.log(toe());			// 1

console.log("concat2"+toe+"concat2");		// <<<<<<< CURIOSO LO QUE SALE (salen hasta comentarios) function funcionDevuelve1(){// console.log("funcionDevuelve1");return 1;}
console.log(toe);			// [Function: funcionDevuelve1]

console.log("------------ funcionDevuelveFuncion");

function funcionDevuelveFuncion(){
	var funcionDevuelta = function(){console.log("funcionDevuelta ejecutandose")};
	return funcionDevuelta;
}
console.log(funcionDevuelveFuncion);  	// [Function: funcionDevuelveFuncion]
console.log(funcionDevuelveFuncion()); 	// [Function]

console.log("concat3"+funcionDevuelveFuncion+"concat3");   // <<<<<<< CURIOSO LO QUE SALE de nuevo veo el codigo de funcionDevuelveFuncion y de funcionDevuelta
console.log("concat4"+funcionDevuelveFuncion()+"concat4");  //  aqui se ve el codigo de funcionDevuelta



funcionDevuelveFuncion();    			// OJO este NO ejecuta el interior de funcionDevuelta
var r_funcionDevuelveFuncion = funcionDevuelveFuncion();
r_funcionDevuelveFuncion();				// funcionDevuelta ejecutandose


// console.log(funcionDevuelve1());
// console.log(funcionDevuelve1);

// console.log("funcionDevuelve1()["+funcionDevuelve1+"]");
// var r_funcionDevuelve1 = funcionDevuelve1();
// r_funcionDevuelve1;



// (funcionMasSimple({console.log("funcionMasSimple");}))();



	// console.log("funcionMasSimple=["++"]";

function makeContador(){

	var i=0;
	return function(){
			return i++; // primero devuelve (luego incrementa)
		}
	}

// var contador1 = makeContador();
// console.log(contador1);  // [Function]
// console.log(contador1());  // []
// contador1();
// contador1();
// contador1();
// contador1();



(function (obj) {
return {b: 2};
})({a: 1});



// Cuando devuelves una funcion devuelves tb el AMBIENTE EN EL Q SE CREO