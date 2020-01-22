const express = require("express")
// // Iniciando com a variável for
// let array = [1,2,3];
// for (let index = 0; index < array.length; index++) {
//     console.log("Testando for mais uma vez");    
// }

// Objetos
let pet = [{
    "nome": "Batman",
    "raca": "poodle",
    "genero": "feminino",
    "idade": 3,
    "tipo": "cao",
    "vacinado": true,
    "servicos": ["banho", "tosa", "corte"]
},
{
    "nome": "Tesla",
    "raca": "poodle",
    "idade": 3,
    "genero": "masculino",
    "tipo": "gato",
    "vacinado": false,
    "servicos": ["banho", "tosa", "corte"]
},
{
    "nome": "Pokemon",
    "raca": "chiwawa",
    "idade": 20,
    "genero": "nao definido",
    "tipo": "cao",
    "vacinado": false,
    "servicos": ["banho", "tosa", "corte"]
},
{
    "nome": "Eagle",
    "raca": "hotwaile",
    "idade": 5,
    "genero": "masculino",
    "tipo": "cao",
    "vacinado": true,
    "servicos": ["banho", "tosa", "corte"]
},
]

function dataNacimento(obj){
    return 2020 - obj.idade;
}

(function Imprimi(obj){
    console.log("Projeto Petshop");
    console.log("------------------------------------------")
    obj.forEach(element => {
        console.log("nome:" + element.nome);
        console.log("raca:" + element.raca);
        console.log("idade:" + element.idade);
        console.log("genero:" + ((element.genero==='masculino')?"M":"F"));
        console.log("tipo:" + element.tipo);
        console.log("vacinado:" + ((element.vacinado===true)?"Sim":"Não"));
        console.log("servicos:" + element.servicos);
        console.log("------------------------------------------")
    });
})(pet)

function Vacina(obj){
    if (!obj.vacinado){
        obj.vacinado = true;
        console.log("Pet vacinado com sucesso")
    }else{
        console.log("Pet ja esta vacinado")        
    }

    //return obj;
}

// pet.forEach(element => {
//     Vacina(element)
//     console.log(element)
// });

// pet.forEach(element => {
//     Vacina(element)
//     console.log(element)
// });

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
const app = express();

app.get('/', function (req, res) {
    res.send(pet)
});

app.get('/teste', function (req, res) {
    res.send('Nova aba')
});

app.listen(3000);


