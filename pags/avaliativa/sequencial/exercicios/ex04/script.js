function calcular(){
    let n = Number(window.prompt("Qual o valor da sua carteira em reais?"));
    let d = n/6;

    let res = document.querySelector('div#res');

    res.innerHTML = `<p>Sua carteira tem R$${n.toFixed(2)}. Com ela você pode comprar até R$${d.toFixed(2)}!</p>`;
}