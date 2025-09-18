var vida = 1;
var altura = 0;
var largura = 0;
var tempo = 15;

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}
 
ajustaTamanhoPalcoJogo();

function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        if(vida >  3){
            window.location.href ='gameover.html';
        }else{
            document.getElementById('v'+vida).src="img/coracao_vazio.png";
            vida++;
        }
    }

    
    var posicaoX = Math.floor(Math.random() * largura) -90;
    var posicaoY = Math.floor(Math.random() * altura) -90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 :posicaoY;

    console.log(posicaoX, posicaoY);


    // criar o elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'img/pombo.png';
    mosquito.className = tamanhoAleatorio() +' '+ladoAleatorio;
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito'

 
    document.body.appendChild(mosquito);

    // matar o mosquito
    mosquito.onclick= function(){
        //alert('morreu');
        this.remove();


    }


}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3);

    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2);

    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
        
    }
}

var cronometro = setInterval(function() {
    tempo -= 1;
    if( tempo < 0 ){
        window.location.href = 'vitoria.html';
    } else{
        document.getElementById('cronometro').innerHTML = tempo;
    }
},1000)