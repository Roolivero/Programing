<?php

//variables 
$name = "ana"; //string
$age = 30; //int
$price = 10.5; //float
$isActive = true; //bool
$lista = []; //array

/*
Operadores 

&& and
|| or
! not
=== igualdad estricta (valor + tipo)
!== distinto estricto
== igualdad solo con valor 
ej: 
    $a = 5;
    $b = "5";
    var_dump($a == $b);  // true

*/


if($age>=18){
    echo "Adult\n";
} else {
    echo "Minor\n";
}

//array
$items=["book","pen","notebook"];

foreach($items as $item){
    echo $item."\n";
}

$items2=["dog","cat","horse"];
for ($i = 0; $i < count($items2); $i++){
    echo $items2[$i]."\n";
}

function greet($name){
    return "Hello ".$name." how are you?\n";
}

$message = greet("juan");
echo $message."\n";

//Arrays asociativos o diccionarios 
$user = [
    "name" => "ana",
    "age" => 32,
    "email" => "ana@mail.com"
];

echo "Name: ".$user["name"]."\n";
echo "Email: ".$user["email"]."\n";

//Agregar elementos a una lista o un diccionario

$numbers = [];

for ($num = 1; $num < 11; $num++){
    $numbers[] = $num;
}

echo "Numeros agregados en formato aray\n";
print_r($numbers);

echo "Numeros agregados en formato string ".implode(", ",$numbers)."\n";


// en el diccionario 

$user["name"] = "Laura";
echo "Name: ".$user["name"]."\n";

$user["pet"] = "dog";
echo "Pet: ".$user["pet"]."\n";

print_r($user);


$users = [];

$users[] = [
    "name" => "Maria",
    "age" => 25
];

$users[] = [
    "name" => "Juan",
    "age" => 17
];

$users[] = [
    "name" => "Laura",
    "age" => 28
];

foreach($users as $user){
    echo $user["name"]."\n";
}


