const API_URL = "/backend/api.php";
        const form=document.querySelector("#form-object");
        inputNom=document.querySelector("#nom");
        inputCouleur=document.querySelector("#couleur");  
        const tBody=document.querySelector("#table-categories-body");

        
        function chargerCategories(){
         
            fetch(API_URL)
            .then(response => response.json())
         
            .then(result =>{
                tBody.innerHTML=""
                
                result.forEach(category => {
                    tBody.insertAdjacentHTML("beforeend", `
                        <tr>
                            <td>${category.nom}</td>
                            <td>${category.couleur}</td>
                            <td>
                                <button class="btn-edit" data-id="${category.id}">
                                    Modifier
                                </button>
                
                                <button class="btn-delete" data-id="${category.id}">
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    `);
                });
                const buttons = document.querySelectorAll(".btn-delete");

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                const id = button.dataset.id;

                fetch(API_URL, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: id })
                })
                .then(response => response.json())
                .then(result => {
                    chargerCategories();
                });

            });

        });
        const editButtons = document.querySelectorAll(".btn-edit");

    editButtons.forEach(button => {

    button.addEventListener("click", () => {

        const id = Number(button.dataset.id);

        const category = result.find(cat => Number(cat.id) === id);
        
        if (!category) {
            console.error("Catégorie introuvable !");
            return;
        }
        
        const nom = prompt("Nouveau nom :", category.nom);
        const couleur = prompt("Nouvelle couleur :", category.couleur);

        if (nom === null || couleur === null) {
            return;
        }

        const objet = {
            id: id,
            nom: nom,
            couleur: couleur
        };

        fetch(API_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objet)
        })
        .then(response => response.json())
        .then(data => {
            chargerCategories();
        });

    });

});

        })
        .catch(error => console.error("error :", error));
                }



            document.addEventListener("DOMContentLoaded", () => { 

                form.addEventListener("submit",(event)=>{
                    event.preventDefault();
                    const objet = {
                        nom: inputNom.value,
                        couleur: inputCouleur.value,
                        };
                        fetch(API_URL,{ 
                            method:"POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(objet)} )
                        .then(response=>response.json())
                        .then(result=>{
                            
                            form.reset();
                            chargerCategories();


                        })
                      

                  
                })
                
                
                chargerCategories(); 
            });
