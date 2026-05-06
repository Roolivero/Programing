//Ejercicio 1

const numbers = [1,2,3,4,5,6,7,8,9,10];

function evenNumbers(numbers){

    const even = numbers.filter((num) => num%2 === 0);
    const doubleEvens = even.map((num) => num * 2);
    return doubleEvens;
}

console.log(evenNumbers(numbers));

//Ejercicio 2

const users = [
    { id: 1, name: "Ana", active: true },
    { id: 2, name: "Luis", active: false },
    { id: 3, name: "Marta", active: true },
    { id: 4, name: "Juan", active: false }
];

function activeUsers(users){
    const active = users.filter((user) => user.active === true);
    const usersNames = active.map(({name}) => name );
    return usersNames;
}

console.log("active users: ");
console.log(activeUsers(users));

//Ejercicio 3

const products = [
    { id: 1, name: "Notebook", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 80 },
    { id: 4, name: "Monitor", price: 300 }
];

function totalPrice(products){
    const total = products.reduce((acc,products) => {
        return acc + products.price
    },0);
    return total;
}

console.log("Total price: ");
console.log(totalPrice(products));


//Ejercicio 4

const orders = [
    { id: 1, userId: 1, total: 100 },
    { id: 2, userId: 2, total: 200 },
    { id: 3, userId: 1, total: 150 },
    { id: 4, userId: 3, total: 300 },
    { id: 5, userId: 2, total: 50 }
];

function newArray(orders){
    for(count oder of orders){
        return 
    }   
}