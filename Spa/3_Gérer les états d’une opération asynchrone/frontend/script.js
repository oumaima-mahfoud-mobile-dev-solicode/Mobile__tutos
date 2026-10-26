    const btnSubmit = document.getElementById('btn-submit');
    const message = document.getElementById('message');

        function setLoadingState(isLoading) {
            btnSubmit.disabled = isLoading;

            if (isLoading) {
                btnSubmit.textContent = 'Enregistrement...';
            } else {
                btnSubmit.textContent = 'Enregistrer';
            }
        }

        btnSubmit.addEventListener('click', function() {
            setLoadingState(true);
            message.textContent = '';

            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response =>  response.json())
                .then(data => {
                    console.log(data)
                    message.textContent = 'Succès : ' + data.title +  '      id : ' + data.id;
                })
                .catch(error => {
                    message.textContent = 'Une erreur est survenue.';
                    console.error(error);
                })
                .finally(() => {
                    setLoadingState(false);
                });
        });