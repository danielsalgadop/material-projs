var obj_mas_simple = {}
var strset = {
	hola: true,
	adios: true
};
if("hola" in strset){
	console.log("entuentro hola en strset con este valor=["+strset["hola"]+"]");  //  hola comillas dobles
	console.log("entuentro hola en strset con este valor=["+strset['hola']+"]");  // hola comillas simples
}else{
	console.log("NO lo encuentro");
}



var obj1 = {
	prop1: "valor1"
}

// Los objetos se copia POR REFERENCIA
obj2 = obj1;
obj2.prop1 = "nuevo_valor1";
console.log(obj1.prop1);  // "nuevo_valor1" El cambio de valor hecho en obj2 cambia obj1 (mismo slot de memoria (referencia))
// le añado una funcion

obj1.fun_anyadida = function(){ console.log("has llamado a fun_anyadida")};

obj1.fun_anyadida();  // llamando a la funcion recien anyadida  

// console.log(obj1); // { prop1: 'nuevo_valor1', fun_anyadida: [Function] }