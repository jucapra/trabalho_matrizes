
//Pedindo para o usuario informar o numero de linhas e colunas
var linhas = parseInt(prompt("Informe o número de linhas da matriz:"));
var colunas = parseInt(prompt("Informe o número de colunas da matriz:"));


let matriz1 = new Array();
let matriz2 = new Array();

// Solicitando os valores da primeira matriz 
document.write("<h2>Matriz 1 </h2><br>");
for (var i = 0; i < linhas; i++) {
  matriz1[i] = [];
  for (var j = 0; j < colunas; j++) {
    matriz1[i][j] = parseInt(prompt("Informe o valor da posição [" + i + "][" + j + "] da primeira matriz:"));
    document.write(matriz1[i][j] + " ");
  }
  document.write("<br>");
}

document.write("<br>");

// Solicitando os valores da segunda matriz
document.write("<h2>Matriz 2</h2><br>");
for (var i = 0; i < linhas; i++) {
  matriz2[i] = [];
  for (var j = 0; j < colunas; j++) {
    matriz2[i][j] = parseInt(prompt("Informe o valor da posição [" + i + "][" + j + "] da segunda matriz:"));
    document.write(matriz2[i][j] + " ");
  }
  document.write("<br>");
}

document.write("<br>");

/*A função subtrairMatrizes percorre cada posição das matrizes de entrada (matriz A e matriz B) e calcula a soma dos
 valores correspondentes. Os resultados são armazenados na matriz 'subtrai'.*/
function subtrairMatrizes(matriz1, matriz2) {
    var subtrai = new Array();
  
    for (var i = 0; i < matriz1.length; i++) {
      var linha = new Array();
      for (var j = 0; j < matriz1[i].length; j++) {
        linha.push(matriz1[i][j] - matriz2[i][j]);
      }
      subtrai.push(linha);
    }
  
    return subtrai;
  }
  
  var resultado = subtrairMatrizes(matriz1, matriz2);

  /*Após calcular a matriz resultante, utiliza-se document.write() para exibir as matrizes matriz A,
   matriz B e a matriz resultante na página HTML. */
document.write("<h2>Matriz Resultante:</h2><br>");
for (var i = 0; i < resultado.length; i++) {
  for (var j = 0; j < resultado[i].length; j++) {
    document.write(resultado[i][j] + " ");
  }
  document.write("<br>");
}
