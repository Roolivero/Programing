<?php

// ejemplo de funcion 
$userExpample = [
    "name" => "Maria",
    "email" => "maria@email.com",
    "age" => 25,
    "is_active" => true
];

function canLogin($userExpample){
    return $userExpample["age"]>=18 && $userExpample["is_active"];
}

echo canLogin($userExpample)?"Can Login\n":"Can not login\n";

//Ejercicio 1) - Buscar en una lista

$users = [
    ["name" => "Maria", "age" => 25, "is_active" => true, "email" => "maria@email.com"],
    ["name" => "Laura", "age" => 28, "is_active" => true, "email" => "laura@email.com"],
    ["name" => "Juan", "age" => 17, "is_active" => true, "email" => "juan@email.com"],
    ["name" => "Ana", "age" => 30, "is_active" => false, "email" => "ana@email.com"],
];

function getActiveUsers($users){
    foreach($users as $user){
        if($user["age"] >= 18 && $user["is_active"]){
            $new_users[] = $user;
        }
    }

    return $new_users;
}

print_r(getActiveUsers($users));

//Ejercicio 2 - Buscar un usuario por el email

function findUserByEmail($users, $email){
    foreach($users as $user){
        if($user["email"] === $email){
            return $user;
        }
    } 
    return null; 
}

$email = "ana@email.com";
$result = findUserByEmail($users,$email);

if ($result === null) {
    echo "Not Found\n";
} else {
    echo "El usuario con email " . $email . " corresponde a:\n";
    print_r($result);
}

// Ejercicio 3: input por terminal 

$email = trim(readline("Ingrese un email: \n"));
$result = findUserByEmail($users,$email);

if ($result === null) {
    echo "Not Found\n";
} else {
    echo "El usuario con email " . $email . " corresponde a:\n";
    print_r($result);
}


//Ejercicio 4: cambiar un nombre en particular 

$users = [
    ["name" => "Maria", "age" => 25, "is_active" => true, "email" => "maria@email.com"],
    ["name" => "Laura", "age" => 28, "is_active" => true, "email" => "laura@email.com"],
    ["name" => "Juan", "age" => 17, "is_active" => true, "email" => "juan@email.com"],
    ["name" => "Ana", "age" => 30, "is_active" => false, "email" => "ana@email.com"],
];

function changeName($users,$oldName,$newName){
    foreach($users as $index =>$user){
        if($user["name"] === $oldName){
            $users[$index]["name"] = $newName;
            return $users;
        } 
    }
    return null;
}

$oldName = trim(readline("Insert the name you want to change: "));
$newName = trim(readline("New name: "));

$usersModified = changeName($users,$oldName,$newName);

if($usersModified === null){
    echo "No users to modify\n";
    print_r($users);
} else {
    print_r($usersModified);
}