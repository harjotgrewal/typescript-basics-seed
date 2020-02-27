"use strict";
var pizzas = [
    { name: 'Cheese', toppings: ['Cheese'] }
];
var mappedPizzas = pizzas.map(function (pizza) {
    return pizza.name.toUpperCase();
});
console.log(mappedPizzas);
