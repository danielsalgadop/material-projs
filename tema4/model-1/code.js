var Producto = ProJS.Model.extend({
  // escribe aquí
  paisesValidos:["francia","españa"],
   id:"",
   nombre:"",
   categoria:"",
   pais:"",
   precio:"",

   defaults:{
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
producto.set({nombre:"pepito"});
var pais = producto.get("pais");
var precio = producto.get("precio");

console.log(pais);
console.log(precio);

// producto.id= "idididi";
// producto.nombre = "nombre";
console.log(producto);