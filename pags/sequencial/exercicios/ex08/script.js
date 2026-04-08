function calcular(){
    let n = Number(window.prompt("Quanto ficou a conta da mesa?"));
    let g = n*0.1;
    let vg = n+g;

    let res = document.querySelector('div#res');

    res.innerHTML = `<p>O valor da gorjeta do garçom ficou R$${g.toFixed(2)}. Você deve pagar um total de R$${vg.toFixed(2)}.</p>`;
}v