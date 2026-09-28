let nombres = [5, 12, 7, 20, 3];

let max = nombres[0];

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > max) {
        max = nombres[i];
    }
}

console.log("Maximum :", max);
