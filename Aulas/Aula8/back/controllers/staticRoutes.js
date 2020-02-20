const home = (req, res) =>{
    res.send('Bem vindo a pizzaria')
}

const sobre = (req, res) =>{
    res.send('A 84 anos fazemos as nosssas melhores pizzas')
}

const pizza = (req, res) =>{
    res.send('Retornando as pizzas')
}


module.exports = {
    home, sobre, pizza
}