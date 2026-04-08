function calcular(){
    let ld1 = Number(window.prompt("Informe o comprimendo"));
    let ld2 = Number(window.prompt("Informe a largura"));

    let a = (ld1*ld2);
    let res = document.querySelector('div#res');

    res.innerHTML = `<p>A área do seu terreno é igual a ${a}m².</p>`
}