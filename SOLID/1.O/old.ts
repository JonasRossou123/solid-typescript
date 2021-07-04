import {Dog} from "./classes/Dog";
import {Cat} from "./classes/Cat";
import {Parrot} from "./classes/Parrot";
import {Dolphin} from "./classes/Dolphin";
import {Zoo} from "./classes/Zoo";

let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Dolphin);

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});