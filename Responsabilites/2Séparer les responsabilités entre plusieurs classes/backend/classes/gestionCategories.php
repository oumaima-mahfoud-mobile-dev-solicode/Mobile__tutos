µ$
<?php

require_once __DIR__ . "/categories.php";

class GestionCategorie
{
    private static $dataFile = __DIR__ . "/../data/data.json";

    // READ : récupérer toutes les catégories
    public function getAll(): array
    {
        if (file_exists(self::$dataFile) === false) {
            return [];
        }

        $json = file_get_contents(self::$dataFile);
        $data = json_decode($json, true);

        $categories = [];

        foreach ($data as $row) {
            $categories[] = new Categorie(
                $row['id'],
                $row['nom'],
                $row['couleur'],
                $row['icone']
            );
        }

        return $categories;
    }

    // CREATE : ajouter une catégorie
    public function create(Categorie $categorie): void
    {
        $data = [];

        if (file_exists(self::$dataFile)) {
            $json = file_get_contents(self::$dataFile);
            $data = json_decode($json, true);

            if (!is_array($data)) {
                $data = [];
            }
        }

        $data[] = [
            'id' => $categorie->getId(),
            'nom' => $categorie->getNom(),
            'couleur' => $categorie->getCouleur(),
            'icone' => $categorie->getIcone()
        ];

        $json = json_encode($data, JSON_PRETTY_PRINT);
        file_put_contents(self::$dataFile, $json);
    }

    // UPDATE : modifier une catégorie
    public function update(Categorie $categorie): void
    {
        $data = [];

        if (file_exists(self::$dataFile)) {
            $json = file_get_contents(self::$dataFile);
            $data = json_decode($json, true);

            if (!is_array($data)) {
                return;
            }
        } else {
            return;
        }

        foreach ($data as $index => $row) {
            if ($row['id'] == $categorie->getId()) {
                $data[$index] = [
                    'id' => $categorie->getId(),
                    'nom' => $categorie->getNom(),
                    'couleur' => $categorie->getCouleur(),
                    'icone' => $categorie->getIcone()
                ];

                break;
            }
        }

        $json = json_encode($data, JSON_PRETTY_PRINT);

        file_put_contents(self::$dataFile, $json);
    }

    // DELETE : supprimer une catégorie par son ID
    public function delete($id): void
    {
        if (file_exists(self::$dataFile) === false) {
            return;
        }

        $json = file_get_contents(self::$dataFile);
        $data = json_decode($json, true);

        if (!is_array($data)) {
            return;
        }

        $categories = [];

        foreach ($data as $row) {
            if ($row['id'] != $id) {
                $categories[] = $row;
            }
        }

        $json = json_encode($categories, JSON_PRETTY_PRINT);

        file_put_contents(self::$dataFile, $json);
    }
}
