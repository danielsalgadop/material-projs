"use strict";

var Prom = function() {
  var self = {},
      state,
      value,
      okCallbacks = [],
      errorCallbacks = [];

  self._isPromise = true;

  self.then = function(onSuccess, onError) {
    var nextPromise = new Prom();

    var onResolve = function() {
      var result;
      try {
        result = onSuccess.apply({}, arguments);
        if (result._isPromise) {
          result.then(
            nextPromise.resolve.bind(nextPromise),
            nextPromise.reject.bind(nextPromise)
          );
        } else {
          nextPromise.resolve(result);
        }
      } catch (e) {
        nextPromise.reject(e);
      }
    };

    var onReject = function() {
      var result;
      if (onError) {
        try {
          result = onError.apply({}, arguments);
          if (result._isPromise) {
            result.then(
              nextPromise.resolve.bind(nextPromise),
              nextPromise.reject.bind(nextPromise)
            );
          } else {
            nextPromise.resolve(result);
          }
        } catch (e) {
          nextPromise.reject(e);
        }
      } else {
        nextPromise.reject.apply(nextPromise, arguments);
      }
    };

    if (state) {
      onResolve.apply({}, value);
    } else if (state === false && onError) {
      onReject.apply({}, value);
    } else if (state === undefined) {
      okCallbacks.push(onResolve);
      errorCallbacks.push(onReject);
    }

    return nextPromise;
  };

  self.resolve = function() {
    if (state !== undefined) { return; }
    state = true;
    value = [].slice.call(arguments);
    okCallbacks.forEach(function(fn) {
      fn.apply({}, value);
    });
  };

  self.reject = function() {
    if (state !== undefined) { return; }
    state = false;
    value = [].slice.call(arguments);
    errorCallbacks.forEach(function(fn) {
      fn.apply({}, value);
    });
  };

  return self;
};

Prom.all = function(promises){
  var next Promise = new Prom(),
    results = new Array(promises.length)
    // magia
    return nextPromise;
}


// USO

function generatePromises() {

  var prom = new Prom(),
      prom2 = new Prom();

  prom.then(function() {
    console.log("prom OK!");
    setTimeout(
      prom2.resolve.bind(prom2, 67)
    , 1000);
    return prom2;
  })
  .then(function(v) {
    console.log("prom2 OK!", v);
  });

  return prom;
}

var p = generatePromises();

// USO

var prom = new Prom(),
    prom2,
    prom3;

prom.then(function(v) {
  throw new Error("Excepcion!");
  return 1;
})
.then(function() {
  console.log("...");
})
.then(function() {
  console.log("...");
}, function(e) {
  console.log("ERROR CAPTURADO!", e);
});

prom.resolve(32);
