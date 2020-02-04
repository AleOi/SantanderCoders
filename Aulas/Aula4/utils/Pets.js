const { convertJson } = require('./Json')
const dataNacimento = (obj) => {
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
//         console.log("data de nascimento:" + dataNacimento(element));
//         console.log("teste:" + element.teste);
//         console.log("------------------------------------------")
//     });
// }

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
    try {
        let array = convertJson(listaPets);        
        const petVacinado = array.map((element) =>{
            return Vacina(element)
        })
        Imprimi(convertImprimivel, petVacinado);
        //console.log("Pets foram vacinados com sucesso")
        return petVacinado;
    } catch (error) {
        const petVacinado = listaPets.map((element) =>{
            return Vacina(element)
        })
        Imprimi(convertImprimivel, petVacinado);
        //console.log("Pets foram vacinados com sucesso")
        return petVacinado;    
    }
    
}

const buscaPeloNome = (trecho, obj) =>{
    const Filtro = obj.filter((element) =>{
        return (element.nome.toLowerCase().indexOf(trecho.toLowerCase()) >= 0)? true: false;
    });
    return Filtro;
}

const castrarPet = (obj) =>{
    const petCastrado = obj.map((element)=>{
        (element.servicos.indexOf("castrado") >= 0)?console.error(element.nome + "Pet ja castrado"):
            element.servicos.push("castrado");
        return element;
    })
    return petCastrado;
}

module.exports = {dataNacimento, 
    adicionaPet, Vacina, 
    Imprimi, darEntradaPets,
    buscaPeloNome, castrarPet}; 