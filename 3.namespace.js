
var MiLib.namespace("widget.botones", function(my){
	my.ok = new ButtonOk();
});
var MiLib = (function(my)){
	my.namespace = function(path,sandbox){
		var root= my;
		// existe? 

		root = MiLib;

		console.log(path);

	};
}(MiLib || {});

MiLib.widgets.botones.ok;

// MiLib = {
// 	widgets: {
// 		botones : {
// 			ok: new ButtonOk();
// 		}
// 	}
// }

// ls propiedad .length NO SE CACHEA

 fo(var i= 0; i<array.length;i++){
 	// en cada iteraccion VUELVE A CONTAR con length
 }

 // soluciones
 // 1) Contar al reves
 for (var i = array.length; i > 0; i--){

 }

// 2) Usar 2 variables
for (var i = 0, len = affay.length; i < length; i++)
