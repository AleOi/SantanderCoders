const { convertJson } = require('./Json')
const dataNacimento = (obj) => {
    data = new Date()
    return (obj.idade !== undefined)?data.getFullYear() - obj.idade: undefined;
}
const adicionaPet = (novoPet, pet) =>{
    pet.push(novoPet);
}
const Vacina = (obj) =>{
    if (!obj.vacinado){
        obj.vacinado = true;
        console.log('Pet ' + obj.nome + ' vacinado com sucesso')
    }else{
        console.log('Pet '+ obj.nome + ' ja esta vacinado')        
    }
    return obj;
}
const Imprimi = (obj) =>{
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
        console.log("data de nascimento:" + dataNacimento(element));
        console.log("------------------------------------------")
    });
}
const darEntradaPets = (listaPets) =>{
    let array = convertJson(listaPets);
    const petVacinado = array.map((element) =>{
        return Vacina(element)
    })
    Imprimi(petVacinado);
    console.log("Pets foram vacinados com sucesso")
    return petVacinado;
}
module.exports = {dataNacimento, 
    adicionaPet, Vacina, 
    Imprimi, darEntradaPets};