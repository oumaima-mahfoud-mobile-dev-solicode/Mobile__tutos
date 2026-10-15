<?php

require_once __DIR__ . "/classes/gestionCategories.php";

$gestion = new GestionCategorie();

$categorie = new Categorie(
    10,
    "Livres",
    "#ff0000",
    "book"
);

$gestion->create($categorie);

echo "Catégorie ajoutée !";