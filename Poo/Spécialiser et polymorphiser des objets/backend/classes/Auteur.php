<?php
require_once "User.php" ;
class Auteur extends User{
    private string $nom;
    private string $biographique;
    private string $prénom;

    public function getRoleNom():string{
        return "Auteur publié";
    }
}