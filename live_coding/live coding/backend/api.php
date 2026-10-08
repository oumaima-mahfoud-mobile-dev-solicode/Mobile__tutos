<?php
header("Content-Type: application/json");
require_once __DIR__ . "/class.php";
$category = new Category();
if ($_SERVER["REQUEST_METHOD"] === "GET") {

    echo json_encode(
        $category->getCategories()
    );

}
elseif ($_SERVER["REQUEST_METHOD"] === "POST") {

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $newCategory = $category->addCategory(
        $data["nom"],
        $data["description"]
    );

    echo json_encode($newCategory);
}
