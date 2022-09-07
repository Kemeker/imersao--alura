function Converter() {  // comando para cria uma funçao dentro de um HTML neste caso um botao
    
    let valor_elemento = document.getElementById("valor") // chama o input no HTML com a ID "valor"
    
    let valor = valor_elemento.value     // cria uma variavel valor e le somente o valor atribuido na variavel valor_elemento           
    
    let valor_dolarNumerico = parseFloat(valor) // cria uma variavel valor_dolarNumerico e converte de string para numero do tipo float

    let valor_realNumerico = valor_dolarNumerico * 5 // cria uma nova variavel valor_realNumerico e passa a seguinte instruçao "multiplica a variavel valor_dolarNumerico por 5"
    
    
    let elementoValorConvertido = document.getElementById("valorconvertido") // cria uma nova variavel elementoValorConvertido passa uma ID do HTML "valorconvertido"
    
    let valorConvertido = "O resultado em real é R$: " + valor_realNumerico //cria uma variavel "valorConvertido " e passa um comando string e concatena com a variavel "valor_realNumerico "
    
    elementoValorConvertido.innerHTML = valorConvertido // comando para acessar o interior do HTML e colocar o valor da variavel "valorConvertido " dentro de uma tag e printar na pagina
}
    
