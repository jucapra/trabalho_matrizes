var m1 = new Array();


m1.push([10,11, 12]); //adiciona elementos individuias //coluna 
m1.push([15,16, 17]); //linha

m1[0][1]=Math.floor(Math.random()*60); //atribui valor 


document.write('<br>');

document.write("<table border='1' id='ma'>");
for(var l=0;l<m1.length; l++){
    document.write('<try>');
for (var c=0; c<m1[1].length; c++){
document.write('<td>' + m1[l] [c] + '</td> ')
}
document.write('</tr>');
}

document.write('</table>');


console.log(m1); //imprime na console o valor da variavel

