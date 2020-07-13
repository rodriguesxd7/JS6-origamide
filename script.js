
//RETORNANDO TODAS AS IMGENS DO SITE
const imgSelector = document.querySelectorAll("img"); //QUERYSELECTORALL É UMA NODELIST, PODE INTERAGIR COM FOREACH
console.log(imgSelector);

//SELECINANDO TODAS A IMAGENS QUE COMEÇAM COM A PALAVRA "IMAGEM"
const imagemAnimais = document.querySelectorAll("img[src^='img/imagem']"); 
console.log(imagemAnimais);

//SELECIONA TODOS OS LINKS INTERNOS, ONDE O HREF COMEÇA COM #
const linksHref = document.querySelectorAll("a[href^='#']"); //O CIRCUNFLEXO SIGNIFICA "COMEÇA COM"
console.log(linksHref);

//SELECIONAR LINKS INTERNOS E EXTERNOS
const linksHrefExternos = document.querySelectorAll("a"); 
console.log(linksHrefExternos);

//SELECIONAR O PRIMEIRO H2 DENTRO DE ANIMAIS DESCRIÇÃO
const primeiroH2 = document.querySelectorAll(".animais-descricao h2");
console.log(primeiroH2);

//SELECIONAR O ULTIMO P DO SITE
const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[ultimoP.length -1]);
