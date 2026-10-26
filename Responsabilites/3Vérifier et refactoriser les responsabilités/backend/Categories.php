<?php
class Categorie
{
    private int $id;
    private string $nom;
    private string $couleur;
    private string $icone;

    public function __construct(int $id, string $nom, string $couleur, string $icone)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->icone = $icone;
    }
    public function getId(): int
    {
        return $this->id;
    }
    public function getNom(): string
    {
        return $this->nom;
    }
    public function SetNom(): void
    {
        $this->nom = $nom;
    }
    public function getCouleur(): string
    {
        return $this->couleur;
    }
    public function SetCouleur(): void
    {
        $this->couleur = $couleur;
    }
    public function getIcone(): string
    {
        return $this->icone;
    }
    public function SetIcone(): void
    {
        $this->icone = $icone;
    }
}