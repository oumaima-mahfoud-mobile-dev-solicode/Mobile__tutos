<?php
require_once  __DIR__ . "/classes/Auteur.php" ;
require_once __DIR__ . "/classes/User.php" ;
$users =[
    new User(),
    new Auteur()
] ;
foreach($users as $user){
    echo $user->getRoleNom() . "<br>";

}
