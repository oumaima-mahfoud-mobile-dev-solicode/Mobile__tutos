
const btnAjouter = document.getElementById("btn-ajouter");
const divform = document.getElementById("div_form");
const formcat = document.getElementById("form-categorie");
const nom = document.getElementById("nom");
const description = document.getElementById("description");
const tbody = document.getElementById("tbody");

const btnSubmit = document.getElementById("btn-submit");
const spinner = document.getElementById("spinner");
const btnText = document.getElementById("btn-text");
const toastContainer = document.getElementById("toast-container");

// Afficher le formulaire
btnAjouter.addEventListener("click", function () {
    divform.classList.remove("hidden");
});


// État de chargement
function setLoadingState(isLoading) {
    btnSubmit.disabled = isLoading;

    spinner.classList.toggle("hidden", !isLoading);

    btnText.textContent = isLoading
        ? "Enregistrement..."
        : "Enregistrer";
}

// Afficher un Toast
function showToast(message, type = "success") {
    const toast = document.createElement("div");

    let classes =
        "text-white px-4 py-2 rounded shadow-lg mb-2 " +
        "transition-opacity duration-300";

    if (type === "success") {
        classes += " bg-green-500";
    } else {
        classes += " bg-red-500";
    }

    toast.className = classes;
    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";

        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Charger les catégories
function charger() {
    fetch("/backend/api.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors du chargement");
            }

            return response.json();
        })
        .then(categories => {
            tbody.innerHTML = "";

            categories.forEach(cate => {
                tbody.innerHTML += `
                    <tr>
                        <td>${cate.nom}</td>
                        <td>${cate.description}</td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.error(error);
            showToast("Erreur lors du chargement", "error");
        });
}

// Ajouter une catégorie
formcat.addEventListener("submit", function (event) {
    event.preventDefault();

    const categories = {
        nom: nom.value,
        description: description.value
    };

    setLoadingState(true);

    fetch("/backend/api.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categories)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors de l'enregistrement");
            }

            return response.json();
        })
        .then(data => {
            showToast("Catégorie ajoutée avec succès !");

            formcat.reset();
            divform.classList.add("hidden");

            charger();
        })
        .catch(error => {
            console.error(error);
            showToast("Erreur lors de l'enregistrement", "error");
        })
        .finally(() => {
            setLoadingState(false);
        });
});

charger();
