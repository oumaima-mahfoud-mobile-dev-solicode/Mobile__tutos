<?php

class Category
{
    private $file;
    public function __construct()
    {
        $this->file = __DIR__ . "/data/data.json";
    }
    public function getCategories()
    {
        $json = file_get_contents($this->file);
        return json_decode($json, true);
    }

    public function addCategory($nom, $description)
    {
        $categories = $this->getCategories();
        $newCategory = [
            "nom" => $nom,
            "description" => $description
        ];

        $categories[] = $newCategory;

        file_put_contents(
            $this->file,
            json_encode($categories, JSON_PRETTY_PRINT)
        );

        return $newCategory;
    }
}