const API="../backend/api.php";
const form = document.getElementById("form")
const nom= document.getElementById("nom")
const couleur = document.getElementById("couleur")
const tbody=document.getElementById("tbody")
function get(){
    fetch(API)
.then(response=>response.json())
.then(results=>{
    tbody.innerHTML="";
    results.forEach(result=> {
        tbody.insertAdjacentHTML(
            "beforeend",
            `
            <tr>
            <td>${result.nom}</td>
            <td>${result.couleur}</td>
            </tr>
            `
        )});

})
.catch(error => {
    console.log(error);
});

}
get();

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const objet={
        nom : nom.value,
        couleur:couleur.value
    }
    console.log(objet);
    fetch(API , {
        method:"POST" ,
        headers: {'Content-type': 'application/json'} ,
        body:JSON.stringify(objet)
    })
    .then(respence=>respence.json())
    .then(data=>{
        console.log(data)
       get()
       form.reset();
    })
    .catch(error => {
        console.log(error);
    });
})
        