var InstanceModule = {
	diHola: function(){alert("HOLA");},
};

var MiClase = Class.extend({
	init: function() {},
});
MiClase.mixin(InstanceModule);

var m = new MiClase();
m.diHola();