function calcular(){
    let n1 = Number(window.prompt("Informe o primeiro número"));
    let n2 = Number(window.prompt("Informe o segundo número"));
    let resp = (n1 + n2);
    let res = document.querySelector('div#res');
    res.innerHTML = `<p>O resultado da sua operação é <strong>${resp}</strong>.</p>`;
}