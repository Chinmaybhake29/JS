//Name Function

function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello("Chinmay");

//Annyomus Functions

var myfunc = function () {
  console.log("Hello");
};

myfunc();

//Arrow Functions

const greet = () => console.log("Goood Morning");
greet();

//Array

const marveHeros = ["IRON MAN", "DEADPOOL", "WOLVERINE", "ANT-MAN"];
const schero = new Array("SUPERMAN", "FLASH", "BATMAN");

var cap = marveHeros[2];

//for loop
for (let i = 0; i < marveHeros.length; i++) {
  console.log(marveHeros[i]);
}

//for off
for (let heros of marveHeros) {
  console.log(heros);
}

marveHeros.forEach((hero, i) => console.log(hero, i));

const dcheros1 = ["SUPERMAN", "FLASH", "BATMAN", "WONDERMAN", "ANT-MAN"];
// dcheros1.push("Wonder Women");
// console.log(dcheros1);

// dcheros1.pop();
// console.log(dcheros1);

// dcheros1.unshift("SUPERMAN");
// console.log(dcheros1);
// dcheros1.shift("Wonder women");
// console.log(dcheros1);

var arr = dcheros1.splice(0, 1);
console.log("spiced array:", arr);
// console.log(dcheros1.slice(0, 3));
console.log(dcheros1);

dcheros1.splice(1, 2, "Aquamen");
console.log(dcheros1);
