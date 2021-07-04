"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Oven_1 = require("./classes/Oven");
var Stove_1 = require("./classes/Stove");
var Restaurant_1 = require("./classes/Restaurant");
var bakery = new Restaurant_1.Restaurant("Bakery", new Oven_1.Oven());
bakery.cook("cookies");
var crepery = new Restaurant_1.Restaurant("Crepery", new Stove_1.Stove());
crepery.cook("crepes");
