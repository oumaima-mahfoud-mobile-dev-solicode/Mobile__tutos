const btnSubmit = document.getElementById('btn-submit');
const messagee = document.getElementById("messagee")
const message = document.getElementById('message');
const container = document.getElementById('toast-container');

function setLoadingState(isLoading) {
    btnSubmit.disabled = isLoading;

    if (isLoading) {
        btnSubmit.textContent = 'Enregistrement...';
    } else {
        btnSubmit.textContent = 'Enregistrer';
    }
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');

    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

btnSubmit.addEventListener('click', function() {
    setLoadingState(true);
    message.textContent = '';

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            message.textContent =
                'Succès : ' + data.title + ' id : ' + data.id;

            showToast('Opération réussie !', 'success');
        })
        .catch(error => {
            message.textContent = 'Une erreur est survenue.';

            showToast('Une erreur est survenue.', 'error');

            console.error(error);
        })
        .finally(() => {
            setLoadingState(false);
        });
});
