const pizza = {
    name: 'cheese pizza'
};

const toppings = ['cheese'];

const order = {
    ...pizza,
    toppings
}

console.log(order);