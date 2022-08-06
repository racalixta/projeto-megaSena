
const numerosApostados = [];
const resultado = [];
let valorApFinal = 0;
let qntAcertos = 0;


// pegando o botao apostar e desabilitando p/ ter no min. 6 em numerosApostados
const btnApostar = document.getElementById('btnApostar');
btnApostar.disabled = true;


function selecionarNumeros(numero){

    if(numerosApostados.length >= 0 && numerosApostados.length <= 14){

        //add o numero na lista
        numerosApostados.push(numero);

        // ordem crescente
        numerosApostados.sort();

        // desabilita o numero escolhido
        desabilitarNumeroEscolhido(numero);

        // habilita o botao apostar
        if(numerosApostados.length > 5){
            btnApostar.disabled = false;

            //logica do valor da aposta

            valorAposta();

        }

        // mostrar quantidade de Num apostados
        const qntNumeros = document.getElementById('qntNum') 

        qntNumeros.innerHTML = `
        <p>Qnt. Números</p>
        <p class="valor">${numerosApostados.length}</p>
        `
    }

}

function desabilitarNumeroEscolhido(num){

    document.getElementById('num-' + num).disabled = true;
    
    document.getElementById('num-' + num).style.background = '#009e4c';

    document.getElementById('num-' + num).style.color = '#ffffff';

}

function valorAposta(){

    switch(numerosApostados.length){
        case 6:
            valorApFinal = "R$ 4,50";
            break;
        case 7:
            valorApFinal = "R$ 31,50";
            break;
        case 8:
            valorApFinal = "R$ 126,00";
            break;
        case 9:
            valorApFinal = "R$ 378,00";
            break;
        case 10:
            valorApFinal = "R$ 945,00";
            break;
        case 11:
            valorApFinal = "R$ 2.079,00";
            break;
        case 12:
            valorApFinal = "R$ 4.158,00";
            break;
        case 13:
            valorApFinal = "R$ 6.006,00";
            break;
        case 14:
            valorApFinal = "R$ 10.510,50";
            break;
        case 15:
            valorApFinal = "R$ 17.517,50";
            break;
        default:
            valorApFinal = "R$ 0,00";
            break;
    }

    const divValorAposta = document.getElementById('valor');

    divValorAposta.innerHTML = `
        <p>Valor da Aposta</p>
        <p class="valor">${valorApFinal}</p>
    `;
}

function sortearNumeros(){
    // laço para sortear 6 numeros
    for(i = 0; i < 6; i++){
        //sorteia um numero de 0 a 59 (+ 1)
        let numSorteado = Math.round(Math.random() * (59 + 1))
        
        // se o numero já exister ele entrará no while até sortear um numero diferente
        while(resultado.includes(numSorteado)){
            numSorteado = Math.round(Math.random() * (59 + 1));
        }

        //add o numero sorteado na lista resultado
        resultado.push(numSorteado);

        // arruma a lista em ordem crescente
        resultado.sort((a, b) => a - b);
    }
}

function apostar(){
    sortearNumeros();

    //fazer a aposta - comparar numeros sorteados com os apostados

    for(i = 0; i < numerosApostados.length; i++){
        if(resultado.includes(numerosApostados[i])){
            qntAcertos++;
        }

    }

    // mostar o resultado

    const divResultado = document.getElementById('resultado');
    
    for(i = 0; i < resultado.length; i++){
        if(resultado[i] <= 9){
            divResultado.innerHTML += `<div class="resultadoCircle">0${resultado[i]}</div>`
        } else{
            divResultado.innerHTML += `<div class="resultadoCircle">${resultado[i]}</div>`
        }

    }

    // mostrar a quantidade de acertos

    const divAcertos = document.getElementById('acertos');

    divAcertos.innerHTML = `
        <p>Acertos</p>
        <p class="valor">${qntAcertos}</p>
    `

    // desabilitar todos os botoes

    for(i = 1; i <= 60; i++){
        document.getElementById('num-' + i).disabled = true;
    }

    // habilitar botao reiniciar

    document.getElementById('btnReiniciar').style.display = 'inline';

}


// fazendo a pagina reiniciar

// pegando o botao reiniciar, para fazer um event listener
let btn = document.querySelector('#btnReiniciar');

btn.addEventListener('click', function() {
    location.reload();
});











// TEMA ESCURO <<<<<<<<<<<<<<<< <<<<<<     <<<       <<<< 

// Get the theme toggle input
const themeToggle = document.querySelector(
    '.switch input[type="checkbox"]'
  );
  // Function that will switch the theme based on the if the theme toggle is checked or not
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
  // Add an event listener to the theme toggle, which will switch the theme
  themeToggle.addEventListener("change", switchTheme, false);


// ------------------------- pt 2


function switchTheme(e) {
if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    
    // Set the user's theme preference to dark
    localStorage.setItem("theme", "dark");
} else {
    document.documentElement.setAttribute("data-theme", "light");
    
    // Set the user's theme preference to light
    localStorage.setItem("theme", "light");
}
}

// ------------------ pt 3


// Get the current theme from local storage
const currentTheme = localStorage.getItem("theme");
// If the current local storage item can be found
if (currentTheme) {
  // Set the body data-theme attribute to match the local storage item
  document.documentElement.setAttribute("data-theme", currentTheme);
// If the current theme is dark, check the theme toggle
  if (currentTheme === "dark") {
    themeToggle.checked = true;
  }
}













