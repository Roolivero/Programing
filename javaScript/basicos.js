//Ejercicio 1
const name = "Ro";
let age = 26;

const newAge = age + 1;

const message = `hi, my name is ${name} and the next year ill be ${newAge} years old`;
const message2 = "hi, my name is " + name + " and the next year ill be " + newAge + " years old";

console.log(message);
console.log(message2);

//Ejercicio 2
//Funciones normales y arrow functions 

function greetings(name){
    return `Hi, ${name}`;
}

const message3 = greetings("Ro");
console.log(message3);

const isAnAdult = (age) => {
    return age >=18;
};

if(isAnAdult(26)){
    console.log("Is an adult");
} else {
    console.log("Is not an adult");
}

const finalPrice = (price,discount)=> (price - (discount*price)/100); 

console.log("Final price: " + finalPrice(1000,20));

//Ejercicio 3 - if / else 

function validateUser(user){
    if(user === null || user === undefined){
        return "Invalid User";
    } 
    
    //js evalua la condicion dentro de un if como true o false 
    // los valores que toma como falsy son 
   // false, 0, "", null, undefined, NaN
    if(!user.name){  //si es "", null o undefined 
        return "Name is required";
    }
    
    if(user.age < 18){
        return "Must be adult";
    }
    
    if(!user.email){  //si es "", null o undefined 
        return "Email is required";
    }

    return "Valid User";
}

console.log(validateUser(null));
console.log(validateUser({ name: "", age: 26, email: "ro@mail.com" }));
console.log(validateUser({ name: "Ro", age: 15, email: "ro@mail.com" }));
console.log(validateUser({ name: "Ro", age: 26, email: "" }));
console.log(validateUser({ name: "Ro", age: 26, email: "ro@mail.com" }));


//ejercicio 4 - loops 

function sumPositiveNumbers(numbers){
    let total = 0;
    for(const number of numbers) {
        if(number >= 0){
            total = total + number;
        }
    }
    return total; 
}

console.log(sumPositiveNumbers([1, -2, 3, 0, 5])); // 9
console.log(sumPositiveNumbers([-1, -5, 10])); // 10
console.log(sumPositiveNumbers([])); // 0


// Ejercicio 5 - loops + strings + condiciones


function countVowels(word){
    const vowels = ["a","e","i","o","u"];
    let vowelsAmount = 0;

    for(const letter of word){
        if(vowels.includes(letter)){
            vowelsAmount += 1;
        }
    }
    return vowelsAmount;
}   

console.log("ejercicio 5");
console.log(countVowels("javascript")); // 3
console.log(countVowels("hello world")); // 3
console.log(countVowels("RHYTHM")); // 0
console.log(countVowels("")); // 0
