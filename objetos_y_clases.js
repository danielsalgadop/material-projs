// objeto mas simple ( es un json).
// var ClaseMasSimple = {
// }
// objeto_mas_simple = new ClaseMasSimple(); // Esto no funciona POR QUE ClaseMasSimpler NO ES UN CONSTRUCTOR

// 2 tipos de objetos, los LITERALES {}   y los CONSTUIDOS new

// objetos simple CONSTRUIDO
// los constructores ( que son funciones )se llaman (por convencion) con la primera letra mayuscula 
var ClaseConstruidaSimple  = function(){
}
obeto_simple = new ClaseConstruidaSimple();
ClaseConstruidaSimple.anyadoPropiedad = 1;					// le añado una propiedad
console.log(ClaseConstruidaSimple.anyadoPropiedad);			// accedo a la propiedad





var ClaseConstruidaConPropiedades = function(){
	prop1 : "valor propiedad1"
}
objeto_con_propiedades = new ClaseConstruidaConPropiedades();
prop1_valor = objeto_con_propiedades.prop1; // declaro explicitamente q busco prop1
console.log(prop1_valor);					// ¿por que no lo encuentro?
console.log(objeto_con_propiedades.prop1);  // ¿por que no sale la propiedad? // undefines,   por que

// ObejetoSimple.prototype.comer = console.log("Mmmm..");
// ObejetoSimple.prototype.comer = console.log("Mmmm..");

var strset = {
	hola: true,
	adios: true
};
if("hola" in strset){
	console.log("entuentro hola en strset");
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

(function(){console.log("funcion auto ejecutable, mola")})();  // Funncion autoejecutable, no requiere que la llames.   (function(){codigo})());

(function (obj) {
return {b: 2};
})({a: 1});

