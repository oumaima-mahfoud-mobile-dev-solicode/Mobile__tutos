<?php
require_once "Auteur.php" ;
class Auteur extends User{
    private string $nom;
    private string $biographique;
    private string $prénom;

    public function getRoleNom(){
        return "Auteur publié";
    }
}