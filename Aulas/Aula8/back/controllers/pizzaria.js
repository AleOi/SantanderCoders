let { pizzas } = require('../db/pizzas')

let listar = (req, res) =>{
    //let meuvalor = JSON.parse(listaPizzas)
    //console.log(meuvalor)   
    console.log(pizzas)
    let text = '';
    let listar = pizzas.map((element) =>{
        text += element.nome + '\n'
        return (element.nome)
    })
    console.log(text)
    res.send(text);
}

let buscar = (req, res) =>{
    let { buscar } = req.params
    console.log(buscar)
    const resltado = pizzas.filter((pizza)=>{
        console.log(pizza.nome)
        return pizza.nome.includes(buscar)
    })
    return res.send(resltado)

    // for(let teste in buscar){
    //     console.log(teste)
    // }

}

module.exports = {
    listar, buscar
}