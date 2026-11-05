function calcular(){
    event.preventDefault()
    let produto = document.getElementById("produto").value
    let valor = Number(document.getElementById("valor").value)
    let desconto = Number(document.getElementById("desconto").value)

    let valor_desc = valor * (desconto / 100) 
    let valor_final = valor - valor_desc

document.getElementById("resultado1").innerHTML = '<b>Produto: <b>' + produto
document.getElementById("resultado2").textContent = 'Valor: R$ ' + valor
document.getElementById("resultado3").innerText = 'Desconto: R$ ' + valor_desc
document.getElementById("resultado4").innerText = 'Valor Final: R$ ' + valor_final

}