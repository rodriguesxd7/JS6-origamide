const imagens = document.querySelectorAll('img'); //SELECIONA TODAS AS IMAGENS DO SITE

imagens.forEach(function(item, index){ //LOOP FOREACH PEGANDO TODAS AS IMG DO SITE E APLICA UMA AÇÃO PARA CADA UMA
   // console.log(item, index);
})


//MOSTRAR NO CONSOLE CADA PARAGRAFO DO SITE
const paragrafo = document.querySelectorAll('p');

paragrafo.forEach((itens) => { //ARROW FUNCTION -- FUNCIONA DA MESMO FORMA QUE UMA FUNÇÃO COMUM
   // console.log(itens)
});

//MOSTRAR OS TEXTOS DOS PARAGRAFOS
const texto = document.querySelectorAll('p');
texto.forEach(texto => console.log(texto.textContent)); //QUANDO EXISTIR APENAS UM PARAMETRO NA FUNÇÃO, NÃO PRECISA ESTAR ENTRE PARÊNTESES 


//CORRIGIR O CÓDIGO ABAIXO
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => { //QUANDO EXISTIR DOIS PARAMETROS NA FUNÇÃO, ELAS DEVEM ESTAR ENTRE PARÊNTESES
    console.log(item, index);
});

//CORRIGIR O CÓDIGO
let i = 0;
imgs.forEach(() => { //QUANDO UMA FUNÇÃO NÃO TIVER PARAMETROS, DEVE TER OS PARENTESES, MESMO QUE VAZIOS.
    console.log(i++);
});

const pTexto = document.getElementsByTagName('p'); //AS TAGS SÃO HTMLCOLLECTIONS E PODEM SER TRANSFORMADAS EM ARRAYS
console.log(pTexto);

textoParagrafo = Array.from(pTexto); //CONVERTENDO HTMLCOLLECTION EM UM ARRAY
textoParagrafo.forEach(item => console.log(item)); // USANDO FOREACH PARA UMA HTMLCOLLECTION CONVERTIDO
