function gerarCartela(){
    // document.getElementById("menu-cartela").style = "display:none";
    // document.getElementById("instrucoes").style = "display:block";
    var image, itens = document.getElementsByClassName('marked'), rows = columns = 5, tileSize = 80, virgin = true;
    var tableSpace = document.getElementById("cartela");
    tableSpace.innerHTML = "";
    var table = document.createElement('table');
    var tr;
    var td;
    var num;
    var variavel = 0; 
    var numArr = [];
    tr = document.createElement('tr');
    tr.innerHTML= '<th> B </th><th> I </th><th> N </th><th> G </th><th> O </th>';
    table.appendChild(tr);
    for ( let i = 0; i < 25; i++){
        num = gerarNumeroAleatorio(75);
        posicao = verificaPosicao(numArr.length)
        min = ((posicao-1)*15)+1;
        max = posicao*15;
        if(numArr.indexOf(num) > -1 || num == 0 || num < min || num > max ){
            i--;
        }      
        else{
            numArr.push(num);
            numArr.sort((a, b) => a - b);
        }
    }
    for ( let i = 0; i < 5; i++){
        tr = document.createElement('tr');
        for ( let j = 0; j < 5; j++){
            td = document.createElement('td');
                    td.addEventListener("click",function(){
                        this.classList.add("marked");
                    });            
                    td.innerHTML += "<h1> "+ numArr[variavel] + "</h1>";
                variavel++
                tr.appendChild(td);
        }
        table.appendChild(tr);
    }  
    tableSpace.appendChild(table);
    document.getElementById("gerar").setAttribute("disabled","disabled");
}
function verificaVencedor(){

}