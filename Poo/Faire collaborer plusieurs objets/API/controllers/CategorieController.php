<?php

require_once '../../backend/classes/GestionCategorie.php';

class GestionController
{
    public function listCategorie(): void
    {
        $gestion = new GestionCategorie();
        $categories = $gestion->getAll();

        foreach ($categories as $cat) {
            echo $cat->getNom() . "<br>";
        }
    }
}

$controller = new GestionController();
$controller->listCategorie();