<?php

class Categorie
{
    private int $id;
    private string $nom;
    private string $description;

    public function __construct(int $id, string $nom, string $description)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->description = $description;
    }

    public function getId(): int    //getter
    {
        return $this->id;
    }

    public function setId(int $id): void   //setter
    {
        $this->id = $id;
    }

    public function getNom(): string    //getter
    {
        return $this->nom;
    }

    public function setNom(string $nom): void   //setter
    {
        $this->nom = $nom;
    }

    public function getDescription(): string     
    {
        return $this->description;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }
}