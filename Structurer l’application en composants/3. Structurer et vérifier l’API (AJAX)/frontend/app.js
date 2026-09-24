fetch('../backend/categories.php')
.then(Response => Response.json())
.then(categories => {
    const liste = document.getElementById('categories');
    categories.forEach(category =>  {
        const li = document.createElement('li');
        li.textContent = category.name;
        liste.appendChild(li);
    });
})
.catch(error => {
    console.error("erreur : " , error);
});