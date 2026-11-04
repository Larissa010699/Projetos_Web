function calcular() {

    // Receber o valor da conta
    let conta = Number(document.getElementById("conta").value);

    // Receber o número de pessoas
    let pessoas = Number(document.getElementById("pessoas").value);

    // Verificar se os campos foram preenchidos
    if (conta <= 0 || pessoas <= 0) {
        alert("Digite valores válidos!");
        return;
    }

    // Calcular 10% de serviço
    let taxa = conta * 0.10;

    // Somar a taxa ao valor da conta
    let total = conta + taxa;

    // Dividir o total entre as pessoas
    let individual = total / pessoas;

    // Mostrar os resultados
    document.getElementById("resultado1").innerHTML =
        "Valor da conta: R$ " + conta.toFixed(2);

    document.getElementById("resultado2").innerHTML =
        "Total com 10% de serviço: R$ " + total.toFixed(2);

    document.getElementById("resultado3").innerHTML =
        "Valor por pessoa: R$ " + individual.toFixed(2);
}

function limpar() {

    document.getElementById("conta").value = "";
    document.getElementById("pessoas").value = "";

    document.getElementById("resultado1").innerHTML = "";
    document.getElementById("resultado2").innerHTML = "";
    document.getElementById("resultado3").innerHTML = "";
}