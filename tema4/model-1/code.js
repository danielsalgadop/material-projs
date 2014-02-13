var Producto = ProJS.Model.extend({
  // escribe aquí
  initialize: (function(){
    var id = 0;
    return function(){
      function(){   // clausurar para manterne valor entre llamadas
        this.set("id",this.id);
      };
  }
  paisesValidos:["francia","españa"],
   id:"",
   nombre:"",
   categoria:"",
   pais:"",
   precio:"",

   validate: function(attrs){
    var vacio = /^\s/,
        pais = /España|Francia|Portugal/,
        numerico = /^\d*$/,
        errores = [];   // array de errores
    if(vacio.test(attrs["nombre"])){
      errores.push("el nombre esta vacio");
    }

    return(errores.lenght>0)?errores:undefined;
   }
   defaults:{
      id:0,
   		nombre: "default_nombre",
   		categoria: "default_categoria",
   		pais: "default_pais",
   		precio:"default_precio"
   },
   saludar: function(){
   	console.log("hola");
   }
});


var producto  = new Producto();
producto.set({nombre:""},{validate:true});
var pais = producto.get("pais");
var precio = producto.get("precio");

console.log(pais);
console.log(precio);

// producto.id= "idididi";
// producto.nombre = "nombre";
console.log(producto);



// Para usar  Objetos Fuera de los que te ofrece backbone.js
function Class (options){
  if (this.initialize){
    this.initialize(options);
  }
}
Class.extend = Backbone.Model.extend;   // lo que haces es "tomar prestado" el metodo extend de backbone


