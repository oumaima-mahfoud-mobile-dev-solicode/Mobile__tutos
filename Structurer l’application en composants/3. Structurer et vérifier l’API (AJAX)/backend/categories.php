<?php

$categories = [
    ["id" => 1, "name" => "Robes"],
    ["id" => 2, "name" => "Sacs"],
    ["id" => 3, "name" => "Chaussures"]
];

header('Content-Type: application/json');

echo json_encode($categories);