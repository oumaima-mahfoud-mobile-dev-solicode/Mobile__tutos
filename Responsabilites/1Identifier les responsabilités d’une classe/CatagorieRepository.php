<?php
class CategorieRepository {
    public function readAll() {
        $json = file_get_contents("categories.json");
        return json_decode($json);
    }
    
}

$Repository=new CategorieRepository();
$categories= $Repository->readAll() ;
var_dump($categories);


