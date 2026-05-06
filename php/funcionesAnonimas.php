<?php 

//ejemplo
$greet = function ($name) {
    return "Hello " . $name;
};

echo $greet("Maria") . "\n";


$numbers = [1, 2, 3, 4];

$doubled = array_map(function ($number) {
    return $number * 2;
}, $numbers);

print_r($doubled);


// Ejercicio

$users = [
    ["name" => "Maria", "is_active" => true],
    ["name" => "Juan", "is_active" => false],
    ["name" => "Ana", "is_active" => true],
];


$activeUsers = array_filter($users,function($user){
    return $user["is_active"];
});

print_r($activeUsers);

// array_reduce 

$cart = [
    ["product" => "Keyboard", "price" => 100],
    ["product" => "Mouse", "price" => 50],
    ["product" => "Monitor", "price" => 300],
];

$total = array_reduce($cart, function($carry, $item) {
    return $carry + $item["price"];
}, 0);

