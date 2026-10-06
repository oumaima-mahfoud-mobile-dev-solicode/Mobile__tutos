const ul = document.getElementById("categories")
fetch("../backend/categories.php")
.then(respense=>respense.json())
.then(data =>{
    data.forEach(dat => {
        const li = document.createElement("li")
        li.textContent= dat.name;
        ul.appendChild(li)
        
    });

})
 .catch( error => console.log(error));