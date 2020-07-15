function Carro(marcaAtribuida, precoAtribuido) { //FUNCAO CONSTRUTORA
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro("Fit", 30000);
const fiat = new Carro("Siena", 22000);


function CalcTaxa(marca, precoInicial) {
    this.taxa = 1.2;
    const precoFinal = precoInicial * this.taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const carros = new CalcTaxa("toyota - Etios", 5000);

function Dom (seletor) {
    this.element = function () {
        return document.querySelector(seletor);
    }

    this.ativar = function () {
        this.element().classList.add("ativar");
    }
}

const li = new Dom("li");

//==================================EXERCÍCIOS==========================================

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        return nome + ", " + idade + " anos";
    }
}

const bruno = new Pessoa ("Bruno Rodrigues", 29);
const joao = new Pessoa ("Joao", 20);
const maria = new Pessoa ("Maria", 25);


const pessoa = {
    nome: "Bruno Cesar Rodrigues",
    idade: 0,
    andar() {
        console.log(this.nome + 'Andou');
    }
}


//=========================================================================

function DomExercicio (seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function (classe) {
        elementList.forEach((element) => {
            elements.classList.add(classe)
        })
    }
}

const listas = new DomExercicio ("li");
