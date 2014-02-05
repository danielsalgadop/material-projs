// objeto funcionando
//var PersonaNOesLoquePiden  = function(){
//}
//PersonaNOesLoquePiden.prototype.comer = console.log("Mmmm..");
// FIN DE objeto funcionando

var Class = function (){};
Class.extend = function(prop) {
	//return true;
	//console.log(prop.arguments);
	for(var key in prop){
		//console.log("toe"+key);
		Klass.prototype[key] = prop[key];
	}
	
	var _super = this.prototype;
	
	function Klass() {
		
	}
	
	return Klass;
};


var Persona = Class.extend({
	init:function(nombre){
		this.nombre = nombre;
	},
	comer: function(){
		console.log("Mmmm..");
	},
});

var persona = new Persona();
persona.comer();
//var c = new Class();

//que_es_extend = Class.extend();
//console.log(Class.extend());

//var Persona  = Class.extend({

//});

//Persona.prototype.comer = function({
	//console.log("Mmmm..");
//});
		//comer: function(){
			//console.log("Mmmm..");
		//},
//};



//persona.comer();


		//comer: function(){
			//console.log("Mmmm..");
		//},
//};


//


	

//var Ninja = Persona.extend({
	//init:function(){
		//this._super("Una sombra anonima");
	//},
	//saltar: function(){
		//console.log("El ninja salta muy alto");
	//}
//});
//

//var p = new Ninja();
//var p = new Persona();
//p.nombre();
//p.comer();
//p.saltar();
