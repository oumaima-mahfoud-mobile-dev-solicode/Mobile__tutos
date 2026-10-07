<?php

header("Content-Type: application/json");
$json = file_get_contents(__DIR__ . "/categories.json");
$data = json_decode($json, true);
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    echo json_encode($data);
} elseif ($_SERVER["REQUEST_METHOD"] === "POST") {
    $vr = json_decode(file_get_contents("php://input"), true);
    $data[] = [
        "id" => count($data) + 1,
        "nom" => $vr["nom"],
        "couleur" => $vr["couleur"]
    ];
    file_put_contents(
        __DIR__ . "/categories.json",
        json_encode($data, JSON_PRETTY_PRINT)
    );
    echo json_encode($data);
}