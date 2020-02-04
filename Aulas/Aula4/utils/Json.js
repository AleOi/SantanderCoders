const convertJson = (json) => {
    let Obj = JSON.parse(json);
    Obj.map((element)=>{
        element.dataNascimento = new Date(element.dataNascimento)
        return element;
    })
    return Obj;
}
module.exports = { convertJson }