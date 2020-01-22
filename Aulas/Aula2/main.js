const express = require("express")
// // Iniciando com a variável for
// let array = [1,2,3];
// for (let index = 0; index < array.length; index++) {
//     console.log("Testando for mais uma vez");    
// }


class Pet {
    constructor(nome, raca, genero, tipo ,vacinado, servicos){
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
        this.vacinado = vacinado;
        this.servicos = servicos;    
    } 

    get Nome(){
        return this.nome;
    }
}

let Julia = new Pet("Julia", "poodle", "feminino", "seila", true, ["banho", "tosa", "corte"]);
// Objetos
let pet = [{
    "nome": "Batman",
    "raca": "poodle",
    "genero": "feminino",
    "tipo": "",
    "vacinado": true,
    "servicos": ["banho", "tosa", "corte"]
},
{
    "nome": "Tesla",
    "raca": "poodle",
    "genero": "masculino",
    "tipo": "",
    "vacinado": true,
    "servicos": ["banho", "tosa", "corte"]
},
{
    "nome": "Pokemon",
    "raca": "chiwawa",
    "genero": "undefined",
    "tipo": "",
    "vacinado": false,
    "servicos": ["banho", "tosa", "corte"]
},
{
    "nome": "Eagle",
    "raca": "hotwaile",
    "genero": "masculino",
    "tipo": "",
    "vacinado": true,
    "servicos": ["banho", "tosa", "corte"]
},
]
pet.forEach(element => {
    console.log(element.nome)
});

console.log(Julia.Nome);

const app = express();

app.get('/', function (req, res) {
    res.send(pet)
});

app.get('/teste', function (req, res) {
    res.send('Nova aba')
});

app.listen(3000);


