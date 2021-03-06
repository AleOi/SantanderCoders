// padraoJson: 2016-01-14T16:30:22Z -> T:separa data hora Z/fuso:padrao gmt
// AAAA-MM-DDTHH:mm:SSZ
// Ex: 2016-01-14T16:30:22-03:00
const { convertJson } = require('./utils/Json');
const { adicionaPet, 
    dataNascimento, 
    Imprimi, Vacina,
    darEntradaPets,
    buscaPeloNome, castrarPet
    } = require('./utils/Pets');

let json = `[{"nome":"Repete Pet","raca":"Passsaro","dataNascimento":"2018-12-10T16:30:22Z","tipo":"Papagaio","peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,"servicos":["Banho","Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento":"2016-01-14T16:30:22Z","tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,"servicos":["Banho","Tosa"]}] `;

const convertImprimivel = (element) => {
    element.genero = ((element.genero==='masculino')?"M":"F");
    element.vacinado = ((element.vacinado===true)?"Sim":"Não");
    element.dataNascimento = `${element.dataNascimento.getDate()}` +
    `/${(element.dataNascimento.getMonth() < 10)? 
        element.dataNascimento.getMonth().toString() + 1:element.dataNascimento.getMonth() + 1}/` + 
    `${element.dataNascimento.getFullYear()}`
   return element;
}

(function main(){
    /*-----------------------Convert JSON---------------------------------- */    
    convertedJson = convertJson(json);

    /*-----------------------Edit convertedJson------------------------------*/    
    let novopet = {
        "nome": "Atiki",
        "raca": "hotwaile",
        "dataNascimento": new Date(),
        "tipo": "cao",
        "idade": 5,
        "genero": "feminino",
        "vacinado": false,
        "servicos": ["banho", "tosa", "corte", "castrado"],
    };
    adicionaPet(novopet, convertedJson);
    //const resultado = darEntradaPets(convertImprimivel, convertedJson);
    const resultado = darEntradaPets(convertImprimivel, json);
    //const petBusca = buscaPeloNome("Rep", convertedJson );
    const petCastrado = castrarPet(convertedJson);

    /*-----------------------Print---------------------------------- */    
    Imprimi(convertImprimivel, petCastrado);
    
})();


