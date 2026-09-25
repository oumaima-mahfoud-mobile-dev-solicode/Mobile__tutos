```php
<?php

require_once "Categorie.php";

$cat = new Categorie(1, "PHP", "Développement avec PHP");

// Modifier le nom avec le Setter
$cat->setNom("Développement Web");

// Lire le nom avec le Getter
echo "Nom de la catégorie : " . $cat->getNom();

?>
```
