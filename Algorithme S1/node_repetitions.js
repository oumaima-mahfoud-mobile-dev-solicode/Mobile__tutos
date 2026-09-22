let nm=[4, 7, 2, 7, 9, 4, 5];
let rep=[];
for (let i = 0; i < nm.length; i++) {
    let compteur = 0;
    for (let j = 0; j < nm.length; j++) {
        if (i !== j && nm[i] === nm[j]) {
            compteur++;
        }
    }
    if (compteur > 0) {
        let dejaExiste = false;
        for (let k = 0; k < rep.length; k++) {
            if (rep[k] === nm[i]) {
                dejaExiste = true;
            }
        }
        if (dejaExiste === false) {
            rep.push(nm[i]);
        }   
    }
}
console.log(rep);