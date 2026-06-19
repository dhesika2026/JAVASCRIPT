let cart = [
    { name: "poco", price: 20000, qty: 1 },
    { name: "bluetooth", price: 1000, qty: 3 },
    { name: "laptop", price: 80000, qty: 2 },
    { name: "watch", price:2000, qty: 1 }
]

// let products = cart.map(c=>(
//     return ({name:c.name,total:c.price*c.qty});
// ))

let products = cart.map(c=>(c.price*c.qty));
console.log(products);