const { convertJson } = require('./utils/Json');
const { adicionaPet, 
    dataNacimento, 
    Imprimi, Vacina,
    darEntradaPets} = require('./utils/Pets');

let json = `[{"nome":"Repete Pet","raca":"Passsaro","dataNascimento":"10/12/2018","tipo":"Papagaio","peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,"servicos":["Banho","Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento":"14/01/2016","tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,"servicos":["Banho","Tosa"]}] `;

(function main(){
    convertedJson = convertJson(json);
    let novopet = {
        "nome": "Atiki",
        "raca": "hotwaile",
        "idade": 5,
        "genero": "feminino",
        "tipo": "cao",
        "vacinado": false,
        "servicos": ["banho", "tosa", "corte"]
    };
    adicionaPet(novopet, convertedJson);
    const resultado = darEntradaPets(json);
})();