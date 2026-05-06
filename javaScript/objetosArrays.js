//Ejemplo - map 

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);

console.log(doubled); // [2, 4, 6]


// Ejercicio 1 - map

const prices = [100, 250, 80, 400];


function applyTax(prices){

    const newPrices = prices.map((price) => price + (price*21)/100);
    return newPrices;
}

console.log("Ejercicio 1.");
console.log(applyTax(prices));
// [121, 302.5, 96.8, 484]


//Ejercicio 2: filter

const products = [
    { name: "Mouse", price: 20, stock: 10 },
    { name: "Keyboard", price: 50, stock: 0 },
    { name: "Monitor", price: 200, stock: 3 },
    { name: "USB Cable", price: 10, stock: 0 },
];



function getAvailableProducts(products){
    const newProducts = products.filter((product) => product.stock >0);
    return newProducts;
}

console.log("Ejercicio 2.");
console.log(getAvailableProducts(products));

//Ejercicio 3: find

const users = [
    { id: 1, name: "Ro", email: "ro@mail.com" },
    { id: 2, name: "Ana", email: "ana@mail.com" },
    { id: 3, name: "Luis", email: "luis@mail.com" },
];

function findUserById(users, id){
    const user = users.find((user) => user.id === id);
    return user; 
}



console.log("Ejercicio 3.");

let user = findUserById(users,2);
if(!user){
    console.log("User doesnt exists");
} else {
    console.log("The user with ID 1 is: " + user.name);
}

user = findUserById(users,6);
if(!user){
    console.log("User doesnt exists");
} else {
    console.log("The user with ID 6 is: " + user.name);
}

//Ejercicio 4: reduce

const cart = [
    { product: "Mouse", price: 20, quantity: 2 },
    { product: "Keyboard", price: 50, quantity: 1 },
    { product: "Monitor", price: 200, quantity: 1 },
];

function calculateCartTotal(cart){
    const prices = [];
    for(const product of cart){
        const price = product.price * product.quantity;
        prices.push(price);
    }
    const total = prices.reduce((acc,prices)=>{ 
        return acc + prices;
    },0);

    return total;
}

console.log("Ejercicio 4");
console.log(calculateCartTotal(cart));


//Ejercicio 5 = contar datos con reduce 
const orders = [
    { id: 1, status: "paid" },
    { id: 2, status: "pending" },
    { id: 3, status: "paid" },
    { id: 4, status: "cancelled" },
    { id: 5, status: "pending" },
];

function countOrdersByStatus(orders) {
    return orders.reduce((acc, order) => {
    const status = order.status;

    if (!acc[status]) {
        acc[status] = 0;
    }

    acc[status] += 1;

    return acc;
    }, {});
}

console.log("Ejercicio 5");
console.log(countOrdersByStatus(orders));


//Ejercicio 6 - sort

const productsToSort = [
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 },
    { name: "Monitor", price: 200 },
    { name: "USB Cable", price: 10 },
];


function sortByPrice(productsToSort){
    const productsSorted = [...productsToSort].sort((a,b) => a.price -b.price);
    return productsSorted;
}

console.log("Ejercicio 6");
console.log(sortByPrice(productsToSort));
console.log("Original: ",productsToSort);

function sortByProductName(productsToSort){
    const newArray = [...productsToSort].sort((a,b) => 
        a.name.localeCompare(b.name)
    );
    return newArray;
}

console.log("Ejercicio 6.1");
console.log(sortByProductName(productsToSort));
console.log("Original: ",productsToSort);


// Ejercicio integrador 

const employees = [
    { id: 1, name: "Ro", role: "backend", salary: 1200, active: true },
    { id: 2, name: "Ana", role: "frontend", salary: 1100, active: true },
    { id: 3, name: "Luis", role: "backend", salary: 900, active: false },
    { id: 4, name: "Marta", role: "qa", salary: 1000, active: true },
];


function getActiveEmployeeSummaries(employees){
    const activeEmployees = employees.filter((employee) => employee.active === true);

    const summary = activeEmployees.map(({id,name,role,salary}) => { 
            return {
                id,
                label: name + " - " + role,
                salary,
            }
        }
    )

    return summary;
}

console.log("Ejercicio integrador");
console.log(getActiveEmployeeSummaries(employees));
