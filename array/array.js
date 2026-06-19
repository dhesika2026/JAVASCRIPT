let products = ["redmi", "airbuds", "poco", "smartwatch"]

products[0] = "Redmi note 14";
console.log(products);

products.push("bluetooth");
console.log(products);

products.pop();
console.log(products);

products.unshift("apple 13");
console.log(products);

products.shift();
console.log(products);

if(products.includes("poco")){
    console.log("Product found");
}
else{
    console.log("Product Not Found")
}

console.log(products.indexOf("poco"));

let frnds1 = ["Riya", "Rishi", "Alya"];
let frnds2 = ["Ram", "Shiva"];
frnds = frnds1.concat(frnds2);
console.log(frnds)

