//darEntradaPets vaccinate and print os pet (convertImprimivel, listaPets)
//convertImprimivel is a callback function for change console.log format
//listaPets is a json string or a array of object

//dataNascimento pet's birth date

const { convertJson } = require('./Json')

const jsontoArray = (campo) => {
    let array;
    try{
        array = convertJson(campo);        
    }catch(err){
        array = campo;
    }       
    return array;
}

const dataNascimento = (obj) => {
    data = new Date();
    return (obj.idade !== undefined)?data.getFullYear() - obj.idade: undefined;
}

const adicionaPet = (novoPet, pet) =>{
    pet.push(novoPet);
}

const Vacina = (obj) =>{
    if (!obj.vacinado){
        obj.teste = "Sou um teste"
        obj.servicos.push("Vacinado") ;
        obj.vacinado = true;
        console.log('Pet ' + obj.nome + ' vacinado com sucesso')
    }else{
        console.log('Pet '+ obj.nome + ' ja esta vacinado')        
    }
    return obj;
}

const Imprimi = (convertImprimivel, obj) =>{
    console.log("Projeto Petshop");
    console.log("------------------------------------------")
    obj.forEach(element => {
        element = convertImprimivel(element);
        for(index in element){
            console.log(`${index}: ${element[`${index}`]}`);
        }
        console.log("------------------------------------------")
    });
}


const darEntradaPets = (convertImprimivel, listaPets) =>{
    let array = jsontoArray(listaPets);
    const petVacinado = array.map((element) =>{
        return Vacina(element)
    })
    Imprimi(convertImprimivel, petVacinado);
    //console.log("Pets foram vacinados com sucesso")
    return petVacinado;
    
}

const buscaPeloNome = (trecho, obj) =>{
    obj = jsontoArray(obj);
    const Filtro = obj.filter((element) =>{
        return (element.nome.toLowerCase().indexOf(trecho.toLowerCase()) >= 0)? true: false;
    });
    return Filtro;
}

const castrarPet = (listaPets) =>{
    obj = jsontoArray(listaPets);        
    const petCastrado = obj.map((element)=>{
        (element.servicos.indexOf("castrado") >= 0)?console.error(element.nome + "Pet ja castrado"):
        element.servicos.push("castrado");
        return element;
    })
    return petCastrado;
}

// const Imprimi = (obj) =>{
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
//         console.log("data de nascimento:" + dataNascimento(element));
//         console.log("teste:" + element.teste);
//         console.log("------------------------------------------")
//     });
// }

module.exports = {
    dataNascimento, 
    adicionaPet, Vacina, 
    Imprimi, darEntradaPets,
    buscaPeloNome, castrarPet
}; 