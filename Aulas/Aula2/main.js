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

// (function Imprimi(obj){
//     console.log("Projeto Petshop");
//     console.log("------------------------------------------")
//     obj.forEach(element => {
//         console.log("nome:" + element.nome);
//         console.log("raca:" + element.raca);
//         console.log("idade:" + element.idade);
//         console.log("genero:" + ((element.genero==='masculino')?"M":"F"));
//         console.log("tipo:" + element.tipo);
//         console.log("vacinado:" + ((element.vacinado===true)?"Sim":"Não"));
//         console.log("servicos:" + element.servicos);
//         console.log("------------------------------------------")
//     });
// })(pet)

(function Imprimi(obj){
    console.log("Projeto Petshop");
    console.log("------------------------------------------")
    let index = 0;
    while(true){
        index = index + 1;        
        console.log("nome:" + obj[index - 1].nome);
        console.log("raca:" + obj[index - 1].raca);
        console.log("idade:" + obj[index - 1].idade);
        console.log("genero:" + ((obj[index - 1].genero==='masculino')?"M":"F"));
        console.log("tipo:" + obj[index - 1].tipo);
        console.log("vacinado:" + ((obj[index - 1].vacinado===true)?"Sim":"Não"));
        console.log("servicos:" + obj[index - 1].servicos);
        console.log("------------------------------------------")
        if(index >=  obj.length){
            break
        }
    }
})(pet)

function adicionaPet(novoPet, pet){
    pet.push(novoPet);
}

let novopet = {
    "nome": "Atiki",
    "raca": "hotwaile",
    "idade": 5,
    "genero": "feminino",
    "tipo": "cao",
    "vacinado": false,
    "servicos": ["banho", "tosa", "corte"]
}

adicionaPet(novopet, pet);





function Vacina(obj){
    if (!obj.vacinado){
        obj.vacinado = true;
        console.log("Pet vacinado com sucesso")
    }else{
        console.log("Pet ja esta vacinado")        
    }

    //return obj;
}

pet.forEach(element => {
     console.log(element)
});

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


