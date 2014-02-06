// objeto mas simple ( es un json).
// var ClaseMasSimple = {
// }
// objeto_mas_simple = new ClaseMasSimple(); // Esto no funciona POR QUE ClaseMasSimpler NO ES UN CONSTRUCTOR


// objeto simple
// los constructores se llaman (por convencion) con la primera letra mayuscula 
var ClaseSimple  = function(){
}
obeto_simple = new ClaseSimple();
ClaseSimple.anyadoPropiedad = 1;					// le añado una propiedad
console.log(ClaseSimple.anyadoPropiedad);			// accedo a la propiedad

var ClaseConPropiedades = function(){
	prop1 : "valor propiedad1"
}
objeto_con_propiedades = new ClaseConPropiedades();
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



// Los objetos se copia POR REFERENCIA
var obj1 = {
	prop1: "valor1"
}

obj2 = obj1;
obj2.prop1 = "nuevo_valor1";
console.log(obj1.prop1);  // "nuevo_valor1" El cambio de valor hecho en obj2 cambia obj1 (mismo slot de memoria (referencia))


(function(){console.log("funcion auto ejecutable, mola")})();  // Funncion autoejecutable, no requiere que la llames.   (function(){codigo})());

(function (obj) {
return {b: 2};
})({a: 1});

