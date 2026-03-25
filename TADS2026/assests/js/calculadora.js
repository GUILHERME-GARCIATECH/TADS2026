let op
const opvalidas = ["+", "-", "*", "/"]
do{
    op = prompt("Qual operação você deseja realizar? soma(+), subtração(-), multiplicação(*) e divisão(/)");
    
    if(!opvalidas.includes(op)){
        alert("Opção invalida! Por favor escolha uma opção correta");
    }

}while(!opvalidas.includes(op));

let n1 = Number(prompt("Informe o primeiro número:"));
let n2 = Number(prompt("Informe o segundo múmero?"));

if (op === "+"){
    alert(`A soma dos seu valores é ${n1 + n2}`);

}else if(op === "-"){
    alert(`A subtração dos seus valores é = ${n1 - n2}`);

}else if (op === "*"){
    alert(`A multiplicação dos seus valores é = ${n1 * n2}`);

}else if (op === "/"){
    alert(`A divisão dos seus valores é = ${n1 / n2}`);

}