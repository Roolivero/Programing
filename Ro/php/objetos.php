<?php

class User 
{
    public $name;
    public $email;
    public $age;

    public function _construct($name,$email,$age){
        $this->name=$name;
        $this->email=$email;
        $this->age=$age;
    }

    public function canRegister()
    {
        return $this->age >= 18;
    }
}

$user = new User("Maria", "maria@email.com", 25);

echo $user->name . "\n";

if ($user->canRegister()) {
    echo "User can register\n";
} else {
    echo "User cannot register\n";
}