<?php
header("Content-Type: application/json");
$categories = [
    [
        "id" => 1 ,
        "nom" => "devloppement"
    ],
    [
        "id" => 2 ,
        "nom" => "design"
    ],
    [
        "id" => 3 ,
        "nom" => "Programmation"
    ]
] ;

echo json_encode($categories);
?>
