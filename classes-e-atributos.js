const menu = document.querySelector(".menu");
console.log(menu.classList);
menu.classList.add('bruno');
menu.classList.remove('azul');

const animais = document.querySelector(".animais");
console.log(animais);


//ADICIONAR A CLASSE ATIVO PARA CADA ITEM DO MENU
const adicionaItem = document.querySelectorAll(".menu a");
adicionaItem.forEach(item => {
    item.classList.add("ativo");
    console.log(item);
})

const removeItem = document.querySelectorAll(".menu a");
removeItem.forEach(item => {
    item.classList.remove("ativo");
    console.log(item);
})

adicionaItem[0].classList.add("ativo"); 

//VERIFICAR SE AS IMAGENS POSSUEM O ATRIBUTO ALT
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(possuiAtributo);
})

//MODIFICAR O HREF DO LINK EXTERNO DO MENU

const linkExterno = document.querySelector("a[href^='http']");
linkExterno.setAttribute('href', 'Bruno ceasr rodrigues');
console.log(linkExterno);

