<?php
require_once "Categorie.php" ;
$categorie1 = new Categorie(
    1,
    "développement web" ,
    "Bleu",
    "icon"
);

$categorie2 = new Categorie(
    2,
    "Deign UI/UX" ,
    "Rose",
    "icon"
);
$categorie1->afficher();
echo "<br>";
$categorie2->afficher();