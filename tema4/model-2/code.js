var Producto = ProJS.Model.extend({
  init: function() {
    this._super.apply(this, arguments);
  },
  // Ponemos unos valores por defecto que
  // satisfagan la validación
  defaults: {
    nombre: "Producto sin nombre",
    categoria: "Sin categorizar",
    pais: "España",
    precio: 0
  },
  set: function(attrs, options) {
    // forzamos que las llamadas a set pasen la validación
    return this._super(attrs, merge(options, {validate: true}));
  },
  validate: function(attrs) {
    var vacio = /^\s*$/,
        pais = /España|Francia|Portugal/,
        numerico = /^\d+$/;
    if (vacio.test(attrs["nombre"]) ||
        vacio.test(attrs["categoria"]) ||
        (attrs["pais"] && !pais.test(attrs["pais"])) ||
        (attrs["precio"] && !numerico.test(attrs["precio"])) ||
        (attrs["id"] && !numerico.test(attrs["id"]))) {
      // No es válido!
      return "Producto no válido!";
    }
  }
});

// Decorador

var ProductoConIva = ProJS.Class.extend({
  init: function(producto) {
    this.producto = producto;
  },
  get: function(clave) {
    if (clave == "precio") {
      // interceptamos la consulta al precio
      return this.producto.get("precio") * 1.21;
    } else {
      // redireccionamos las demás
      return this.producto.get.apply(this.producto, arguments);
    }
  },
  set: function(attrs, options) {
    // redirección al modelo decorado
    return this.producto.set(attrs, options);
  },
  toJSON: function() {
    // redirección al modelo decorado...
    var json = this.producto.toJSON();
    // ...excepto la propiedad "precio"
    json.precio = this.get("precio");
    return json;
  }
});

// Tu código aquí!
  var arrayProductos = new Array();
var id_existe;
$.get("/products",function(response) {
  // console.log(response);
  for (var i = response.length - 1; i >= 0; i--) {
      // console.log(response[i].id);
      producto = new Producto({id:response[i].id , nombre:response[i].nombre});
      arrayProductos.push(producto);

      id_existe = producto.id;
     };

})

// console.log(arrayProductos);

// Modificar algun modelo
// console.log(id_existe);
primer_producto = arrayProductos[0];
console.log("antes nombre"+primer_producto.get("nombre"));

primer_producto.set({nombre: "anterior ["+primer_producto.get("nombre")+"] nombre Mucho mejor,dnd va a parar"});   // <<<< una llamada a SET dentro del GET !!! y funciona
console.log("Despues nombre"+primer_producto.get("nombre"));


function haceAlgoConPrimerObjeto(){

}




// RECOMENDACION, QUE LAS COLECCIONES TENGAN SIEMPRE EL MISMO TIPO DE MODELO

// en vez de usar arrays como anterior , lo hariamos con colecciones
