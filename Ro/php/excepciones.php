<?php

// ejemplo
try {
    echo "Intentando divivir... \n";

    $a = 10;
    $b = 0;

    if($b === 0){
        throw new Exception("No se puede dividir por cero");
    }
    
    $result = $a/$b;
    echo "Resultado: ".$resultado."\n";

} catch (Exception $e){
    echo "Ocurrio un error: ".$e->getMessage()."\n";
}

echo "El programa sigue funcionando bien\n";

// Ejercicio 1) 

function divideNumbers($dividend,$divisor){
    if($divisor != 0) {
        return $dividend / $divisor;
    } else {
        throw new Exception("Cannot divide by zero");
    }
}

try{
    $dividend = trim(readline("Dividend: "));
    $divisor = trim(readline("Divisor: "));
    $result = divideNumbers($dividend,$divisor);
    echo "Result: ".$result."\n";
} catch (Exception $e){
    echo "Error: ".$e->getMessage()."\n";
}


// Ejercicio 2 

function validateName($name){
    if($name === ""){
        throw new Exception("Empty Name");
    } else {
        return true;
    }
}

function validateEmail($email){
    if (str_contains($email,"@")){
        return true;
    } else {
        throw new Exception("Invalid Email");
    }
}

function validateAge($age){
    if($age < 18){
        throw new Exception("User must be at least 18 years old");
    } else{
        return true;
    }
}

function createUser($name,$email,$age){
    validateName($name);
    validateEmail($email);
    validateAge($age);

    return [
        "Name"=>$name,
        "Email"=>$email,
        "Age"=>$age
    ];
}


try{
    $name = trim(readline("Name: "));
    $email = trim(readline("Email: "));
    $age = trim(readline("Age: "));

    $user = createUser($name,$email,$age);
    echo "User created succesfully\n";
    print_r($user);
    echo "\n";

} catch (Exception $e){
    echo "Error: ".$e->getMessage()."\n";
}