function calcular(){
    let nome = window.prompt("Qual o seu nome?");
    let n1 = Number(window.prompt("Qual o valor da sua primeira nota?"));
    let n2 = Number(window.prompt("Qual o valor da sua segunda nota?"));
    let n3 = Number(window.prompt("Qual o valor da sua terceira nota?"));
    let m = (n1+n2+n3)/3;

    let res = document.querySelector('div#res');

    res.innerHTML = `<p>Olá ${nome}! Sua média do semestre é igual a ${m}.</p>`
}