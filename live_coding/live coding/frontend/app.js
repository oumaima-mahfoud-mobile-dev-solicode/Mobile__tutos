const ajouter = document.getElementById("btna");
const form = document.getElementById("form");
const nom = document.getElementById("nom");
const description = document.getElementById("description")
const  anuller = document.getElementById("an")
const tbody = document.getElementById("tbody")
const API = "/backend/api.php"
ajouter.addEventListener('click',()=>{
    form.hidden=false;
    ajouter.hidden=true;
})
anuller.addEventListener('click',()=>{
    form.hidden=true;
    ajouter.hidden=false
})
function charger(){
    fetch(API)
    .then(respence=>respence.json())
    .then(datas =>{
        datas.forEach(data => {
            tbody.insertAdjacentHTML(
                "beforeend" ,
                `
                <tr>
                <td>${data.nom}</td>
                <td>${data.description}</td>
                
                </tr>
                `
            )
            
        });
       
    })
    .catch(error=>console.error(error))
} charger()
