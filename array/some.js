let cart = [
    { name: "poco", price: 20000, qty: 1 },
    { name: "bluetooth", price: 1000, qty: 3 },
    { name: "laptop", price: 80000, qty: 2 },
    { name: "watch", price:2000, qty: 1 }
]

let lowprice = cart.some(c=>(c.price>=3000));
console.log(lowprice);

let highprice = cart.every(c=>(c.qty>=2));
console.log(highprice);