t = Number(prompt ("Qual tabuada você quer saber?"));
m = Number(prompt("Até qual multiplico você quer?"));

for (let i = 0; i <= m - 1; i++){
    let r = t * (i + 1);
    console.log(`${i} X ${t} = ${r}`);
}
