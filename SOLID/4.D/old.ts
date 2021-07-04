import {Oven} from "./classes/Oven";
import {Stove} from "./classes/Stove";
import {Restaurant} from "./classes/Restaurant";

let bakery = new Restaurant("Bakery", new Oven());
bakery.cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.cook("crepes");

