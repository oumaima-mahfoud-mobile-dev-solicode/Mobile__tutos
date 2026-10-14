<?php
class Categorie{
    private $id;
    private $nom;
    private $couleur;
    private $icone;

    public function __Construct($id,$nom,$couleur,$icone){
        $this->id=$id;
        $this->nom=$nom;
        $this->couleur=$couleur;
        $this->icone=$icone;
    }
    public function getid(){
        return $this->id;
    }
    public function getnom(){
        return $this->nom;
    }
    public function getcouleur(){
        return $this->couleur;
    }
    public function geticone(){
        return $this->icone;
    }

}