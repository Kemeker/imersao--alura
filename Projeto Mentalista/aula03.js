


// variavel que define um numero secreto usando a biblioteca Math.random
let numero_secreto = parseInt(Math.random() * 11)

// Funçao atribuida ao botao "chutar", onde a pessoa vai chutar e tentar acertar o numero secreto
function Chutar(){
    
    // variavel que vai pegar o comando imput dentro do html e value extra apenas o valor digitado neste input
    //"parsInt" e quem vai converter o valor digitado no imput de string para numero
    let chute = parseInt(document.getElementById("valor").value)

    // variavel que pega o elemento "h2 resultado" dentro do HTML
    let elemento_resultado = document.getElementById("resultado")

    
   

    // cria uma condiçao para ver se a variavel "chute" digitada pelo usuario 
    //e igual ao numero secreto 
    //se for ele faz a condiçao descrita
    if (chute == numero_secreto){
        elemento_resultado.innerHTML = "Voce acertou"
    
    
    
    // uma condiçao (senao se) o numero digitado for maior que 10
    }else if (chute > 10 || chute < 0){
        alert("Voce deve digitar um numero de 0 a 10")


    // caso o numero nao seja igual ao "numero_secreto" 
    // entao ele pula para o senao ( else) e apresenta o comando descrito  
    }else{
        elemento_resultado.innerHTML = "Voce errou, o numero secreto era ", numero_secreto
        
    }


    

    









  


    
  
 


}  