(function(){console.log("funcion anónima autoejecutable");} )();
function funcionMasSimple(){
	console.log("funcionMasSimple");
}

function funcionDevuelve1(){
	// console.log("funcionDevuelve1");
	return 1;
}
console.log("funcionDevuelve1()["+funcionDevuelve1+"]");
var r_funcionDevuelve1 = funcionDevuelve1();
r_funcionDevuelve1;


// function funcionDevuelveFuncion(){
// 	// console.log("funcionDevuelveFuncion");
// 	return 1;
// }
// console.log("funcionDevuelveFuncion()["+funcionDevuelveFuncion+"]");
// var r_funcionDevuelveFuncion = funcionDevuelve1();


// (funcionMasSimple({console.log("funcionMasSimple");}))();



	// console.log("funcionMasSimple=["++"]";

function makeContador(){

	var i=0;
	return function(){
			return i++; // primero devuelve (luego incrementa)
		}
	}

var contador1 = makeContador();
console.log(contador1);  // [Function]
console.log(contador1());  // []
contador1();
contador1();
contador1();
contador1();