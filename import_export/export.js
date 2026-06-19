export function add(a,b){
    let c = a+b;
    console.log(`The sum of ${a} and ${b} is ${c}`)
}

export function sub(a,b){
    let c = a-b;
    console.log(`The sub of ${a} and ${b} is ${c}`)
}

export default function emp(name,position){
    console.log(`Employee Name is ${name} and position is ${position}`)
}