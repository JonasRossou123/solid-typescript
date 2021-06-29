// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"classes/Musicplayer.js":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Musicplayer = void 0;

var Musicplayer = /*#__PURE__*/function () {
  function Musicplayer() {
    _classCallCheck(this, Musicplayer);

    this._musicLevel = 0;
    this._oldMusicLevel = 50;
  }

  _createClass(Musicplayer, [{
    key: "turnMusicOn",
    value: function turnMusicOn() {
      this._musicLevel = this._oldMusicLevel;
    }
  }, {
    key: "turnMusicOff",
    value: function turnMusicOff() {
      this._musicLevel = 0;
    }
  }, {
    key: "musicLevel",
    get: function get() {
      return this._musicLevel;
    },
    set: function set(value) {
      this._musicLevel = value;
      this._oldMusicLevel = value;
    }
  }]);

  return Musicplayer;
}();

exports.Musicplayer = Musicplayer;
},{}],"classes/Engine.js":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Engine = void 0;

var Engine = /*#__PURE__*/function () {
  function Engine(fuel) {
    _classCallCheck(this, Engine);

    this._engineStatus = false;
    this._fuel = fuel;
  }

  _createClass(Engine, [{
    key: "fuel",
    get: function get() {
      return this._fuel;
    }
  }, {
    key: "engineStatus",
    get: function get() {
      return this._engineStatus;
    }
  }, {
    key: "turnEngineOn",
    value: function turnEngineOn() {
      this._engineStatus = true;
    }
  }, {
    key: "turnEngineOff",
    value: function turnEngineOff() {
      this._engineStatus = false;
    }
  }]);

  return Engine;
}();

exports.Engine = Engine;
},{}],"classes/Car.js":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Car = void 0;

var Car = /*#__PURE__*/function () {
  function Car(MAXIMUM_FUEL_CAPACITY, engine, musicplayer) {
    _classCallCheck(this, Car);

    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
    this._miles = 0;
    this.FUEL_MILEAGE = 10;
    this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    this._engine = engine;
    this._musicplayer = musicplayer;
  }

  _createClass(Car, [{
    key: "engine",
    get: function get() {
      return this._engine;
    }
  }, {
    key: "musicplayer",
    get: function get() {
      return this._musicplayer;
    }
  }, {
    key: "miles",
    get: function get() {
      return this._miles;
    }
  }, {
    key: "addFuel",
    value: function addFuel(fuel) {
      this._engine.fuel.fuel = Math.min(fuel + this.engine.fuel.fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
  }, {
    key: "drive",
    value: function drive() {
      if (this._engine.engineStatus === false || this._engine.fuel.fuel <= 0) {
        //what I am doing here is a good principle called "failing early"
        // If you have some conditions you need to check, that will exclude most of the code in your function check that first
        // This prevents your "happy path" of code to be deeply indented.
        return;
      }

      this._engine.fuel.fuel -= 1;
      this._miles += this.FUEL_MILEAGE;
    }
  }]);

  return Car;
}();

exports.Car = Car;
},{}],"classes/Fuel.js":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fuel = void 0;

var Fuel = /*#__PURE__*/function () {
  function Fuel() {
    _classCallCheck(this, Fuel);

    this._fuel = 0;
  }

  _createClass(Fuel, [{
    key: "fuel",
    get: function get() {
      return this._fuel;
    },
    set: function set(value) {
      this._fuel = value;
    }
  }]);

  return Fuel;
}();

exports.Fuel = Fuel;
},{}],"old.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Musicplayer_1 = require("./classes/Musicplayer");

var Engine_1 = require("./classes/Engine");

var Car_1 = require("./classes/Car");

var Fuel_1 = require("./classes/Fuel"); //Take attention to these getter and setters
//When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
// it is better to provide a specific method for this instead of a generic setter.
// with a setter there is always the chance of somebody lowering the fuel amount by accident.
// When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>


var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var engineToggleElement = document.querySelector('#engine-toggle');
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var audioElement = document.querySelector('#car-music');
var fuel = new Fuel_1.Fuel();
var engine = new Engine_1.Engine(fuel);
var musicplayer = new Musicplayer_1.Musicplayer();
var car = new Car_1.Car(100, engine, musicplayer);
console.log(car);
musicToggleElement.addEventListener('click', function () {
  if (car.musicplayer.musicLevel === 0) {
    car.musicplayer.turnMusicOn();
    musicSliderElement.value = car.musicplayer.musicLevel.toString();
    musicToggleElement.innerText = 'Turn music off';
    return;
  }

  musicToggleElement.innerText = 'Turn music on';
  car.musicplayer.turnMusicOff();
}); //I use input instead of change, because then the value changes when I move the mouse, not only on release

musicSliderElement.addEventListener('input', function (event) {
  var target = event.target;
  var musiclevel = car.musicplayer.musicLevel;
  musiclevel = target.value;
  audioElement.volume = musiclevel / 100; //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?

  musicToggleElement.innerText = musiclevel ? 'Turn music off' : 'Turn music on';
});
engineToggleElement.addEventListener('click', function () {
  if (car.engine.engineStatus) {
    car.engine.turnEngineOff();
    engineToggleElement.innerText = 'Turn engine on';
    return;
  }

  engineToggleElement.innerText = 'Turn engine off';
  car.engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', function (event) {
  event.preventDefault();
  car.addFuel(Number(addFuelInput.value));
  fuelLevelElement.innerText = car.engine.fuel.toString();
});
setInterval(function () {
  car.drive(); //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
  // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number

  milesElement.innerText = car.miles; // This .toString() will actually convert the value in JavaScript from an integer to a string

  fuelLevelElement.innerText = car.engine.fuel.fuel.toString();

  if (car.musicplayer.musicLevel === 0) {
    audioElement.pause();
  } else {
    audioElement.play();
  }
}, 1000);
},{"./classes/Musicplayer":"classes/Musicplayer.js","./classes/Engine":"classes/Engine.js","./classes/Car":"classes/Car.js","./classes/Fuel":"classes/Fuel.js"}],"../../../../../.nvm/versions/node/v16.4.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57248" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../.nvm/versions/node/v16.4.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","old.js"], null)
//# sourceMappingURL=/old.959634d2.js.map