<?php
class Category{
    private $nom;
    private $description;
    public function __construct($nom , $description)
    {
        $this->nom=$nom;
        $this->description=$description;
    }
    public function getnom(){
        return $this->nom;
    }
    public function getdescription(){
        return $this->description;
    }
    public  function setnom($nom){
         $this->nom=$nom;
    }
    public function setdescription($description){
        $this->description=$description;
    }

}
$new = new Category("  dev","mob");
echo $new -> getnom();
echo $new-> getdescription();
$new->setnom("  web");
echo $new->getnom();