
const listaPets = (arr) => {
    let str = ""
    arr.map((element) =>{
        str = str + " Nome do Pet " + element + '\n';
    })
    return str
}        

const addPet = (arr, pet) =>{
    arr.push(pet)
}

module.exports = {listaPets,
                  addPet}; 

