const ajouter=document.getElementById("ajouter")
const section_id=document.getElementById("section_id")
const form= document.getElementById("form")
const nom = document.getElementById("nom")
const an = document.getElementById("an")
const table = document.getElementById("table")

ajouter.addEventListener("click",()=>{
    ajouter.hidden=true;
    section_id.hidden=false;
})
an.addEventListener("click" , ()=>{
    ajouter.hidden=false;
    section_id.hidden=true;
    form.reset()
})
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    table.insertAdjacentHTML(
        "beforeend" ,`
        <tr><td>${nom.value}</td></tr>
        `
    )
    form.reset()
})
