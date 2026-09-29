document.addEventListener("DOMContentLoaded",()=>{
    const form =document.querySelector("#category-form");
    const afficher=document.querySelector("#btn-show-form");
    const annuler= document.querySelector("#btn-cancel-form"); 
    const table_category= document.querySelector("#table-categories-body"); 
    
    let cat_name=document.querySelector("#cat-nom");
    let cat_couleur=document.querySelector("#cat-couleur");
    

    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        table_category.insertAdjacentHTML("beforeend",`<tr> <td>${cat_name.value}</td>
    <td>${cat_couleur.value}</td></tr>`);
    form.reset();

    })

    afficher.addEventListener("click",()=>{
      
            form.hidden=false;
            afficher.hidden=true
    })
    annuler.addEventListener("click",()=>{
      
            form.hidden=true;
            form.reset();
            afficher.hidden=false;
            
    })
})