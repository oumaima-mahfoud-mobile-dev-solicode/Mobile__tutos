<?php
require_once '../../backend/classes/GestionCategorie.php' ;
class GestionController{
        public funtion listCategorie():void{
        
    $gestion = new gestionCategorie();
    $categories= $gestion->getAll();
    foreach ($categories as $cat){
      echo  $cat->getnom() . "<br>";
    } return listCategorie()

    }
}
$controller = new GestionController (),
$controller->GestionController();