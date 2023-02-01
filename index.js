const display = document.querySelector('[display]');
const play = document.querySelector('[play]');
const pause = document.querySelector('[pause]');
const reset = document.querySelector('[reset]');

let horas = 0;
let minutos = 0;
let segundos = 0;

// quantos milésimos equivale a 1 segundo
let tempo = 1000; 
let cronometro;

function iniciar(){
    cronometro = setInterval(() => {timer()}, tempo);

    play.style.display = 'none';
    pause.style.display = 'block';
    reset.style.display = 'block';
};

function parar(){
    clearInterval(cronometro);

    play.style.display = 'block';
    pause.style.display = 'none';
};

function limpar(){
    clearInterval(cronometro);
    horas = 0;
    minutos = 0;
    segundos = 0;

    display.innerText = '00:00:00';

    play.style.display = 'block';
    reset.style.display = 'none';
    pause.style.display = 'none';   
};

function timer(){

    let formato = (horas < 10 ? `0${horas}` : horas) + ':' + (minutos < 10 ? `0${minutos}` : minutos) + ':'+ (segundos < 10 ? `0${segundos}` : segundos);

    display.innerText = formato;

    segundos ++;
    
    if(segundos == 60){
        segundos = 0;
        minutos++;

        if(minutos == 60){
            minutos == 0;
            horas ++;
        };
            if(horas == 24){
                segundos = 0;
                minutos = 0;
                horas = 0;
                // espaço para adicionar dia
            };
    }
}

play.addEventListener('click', () =>{
    iniciar();
    timer();
});

pause.addEventListener('click',() =>{
    parar();
});

reset.addEventListener('click', () =>{
    limpar()
});