// Lista de filmes
let listaFilmes = ["FastFurios", "OprecoDoAmanha", "network"];

// comando para adicionar um filme a lista
listaFilmes.push("Harry Potter");


// Cria um loop para repetir a lista de filmes em uma sequencia 
for (let indice = 0; indice < 4; indice = indice + 1) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}