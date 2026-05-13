console.log("js externo ok");

//ex1 soma dois numeros
function soma(){
    let n1 =  document.getElementById("num1").value;
    let n2 =  document.getElementById("num2").value;

    console.log(n1);
    console.log(n2);
    
    let result = Number(n1) + Number(n2);
    console.log("A soma é: "+ result);
    mostraResult(result);
}

function subtracao(){
    let n1 =  document.getElementById("num1").value;
    let n2 =  document.getElementById("num2").value;

    console.log(n1);
    console.log(n2);
    
    let result = Number(n1) - Number(n2);
    console.log("O resultado é: "+ result);
    mostraResult(result);
}

function multiplicacao(){
    let n1 =  document.getElementById("num1").value;
    let n2 =  document.getElementById("num2").value;

    console.log(n1);
    console.log(n2);
    
    let result = Number(n1) * Number(n2);
    console.log("O resultado é: "+ result);
    mostraResult(result);
}

function divisao(){
    let n1 =  document.getElementById("num1").value;
    let n2 =  document.getElementById("num2").value;

    console.log(n1);
    console.log(n2);
    
    let result = Number(n1) / Number(n2);
    console.log("O resultado é: "+ result);
    mostraResult(result);
}

function mostraResult(R){
    let result = document.getElementById("result");
    result.value = R;
}