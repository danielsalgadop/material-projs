(function(){console.log("funcion anónima autoejecutable");} )();
function funcionMasSimple(){
	console.log("funcionMasSimple");
}

function funcionDevuelve1(){
	// console.log("funcionDevuelve1");
	return 1;
}

//
var toe = funcionDevuelve1;
console.log(""+toe()+"");  // 1
console.log(toe());			// 1

console.log(""+toe+"");		// <<<<<<< CURIOSO LO QUE SALE (salen hasta comentarios) function funcionDevuelve1(){// console.log("funcionDevuelve1");return 1;}
console.log(toe);			// [Function: funcionDevuelve1]



function funcionDevuelveFuncion(){
	var unafuncion = function(){};
	return unafuncion;
}
console.log(funcionDevuelveFuncion);
console.log(funcionDevuelveFuncion());
var r_funcionDevuelveFuncion = funcionDevuelveFuncion();
funcionDevuelveFuncion();




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

