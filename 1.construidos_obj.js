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