console.log("JS 2 externo ok ");
// exe02
function calcularMedia(){
    let soma = 0;
    let media = 0;
    let valores = document.getElementById("valores").value;

    console.log(valores);

    let array_numeros = valores.split("/");
    console.log(array_numeros.length);
    let qntNumeros = array_numeros.length;

    for( let i=0; i < array_numeros.length; i++){
        soma = soma + Number(array_numeros[i]);

    }
    console.log(soma);
    media = soma/qntNumeros;
    console.log(media);

    let p = document.getElementById("media");
    p.innerText = "a media é: " + media;
}
