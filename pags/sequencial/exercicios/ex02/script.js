function calcular(){
    let n = Number(window.prompt("Informe o número aqui."));
    let res = document.querySelector('div#res');
    let a = (n-1);
    let s = (n+1);

    res.innerHTML = `<p>O antecessor e sucessor do número ${n} são, respectivamente, ${a} e ${s}.</p>`;
}