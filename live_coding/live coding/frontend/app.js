const btna = document.getElementById("btna")
const form = document.getElementById("form")
const nom = document.getElementById("nom")
const description = document.getElementById("description")
const tbody = document.getElementById("tbody")
const an = document.getElementById("an")
const API = "../backend/api.php"
btna.addEventListener('click', ()=>{
    form.hidden=false
    btna.hidden=true
})
an.addEventListener('click', ()=>{
    form.hidden=true
    btna.hidden=false
})
function charger(){
    fetch(API)
    .then(respence=>respence.json())
    .then(datas=>{ 
        datas.forEach(data => {
            tbody.insertAdjacentHTML(
                "beforeend" ,
                `<tr>
                <td>${data.nom}</td>
                <td>${data.description}</td>
                </tr>               `
            )           
        });
    })
}
form.addEventListener("submit", (event)=>{

    event.preventDefault()

    const data = {
        nom: nom.value,
        description: description.value
    }

    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(datas => {
        form.reset()
        form.hidden = true
        btna.hidden = false
        charger()
    })

})
charger()
