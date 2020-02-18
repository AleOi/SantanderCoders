const http = require('http')
var express = require('express');
const url = require('url')
const axios = require('axios');

let {listaPets,addPet} = require('./petshop')
var app = express();

var Pets = ['bob','dino', 'amanda'];

let PORT = 3000 || process.env.PORT;
let valor =  ()=>{
    fetch(myRequest)
      .then(response => response.blob())
      .then(blob => {
        myImage.src = URL.createObjectURL(blob);
      });
}



app.get('/contato', (req, res)=>{
    res.send('Contato')
    
})

app.get('/listarpets', (req, res)=>{
    console.log(url.parse(req.url, true));
    res.write('ListaPets\n')
    let listar = listaPets(Pets)
    res.end(listar)
})

app.get('/cadastrarpets', (req, res)=>{
    let newurl = url.parse(req.url, true)
    console.log(newurl)
    console.log(newurl.query)
    let inicio = newurl.query
    res.write('ListaPets\n')
    //addPets(Pets, )
    Pets = addPet(Pets,inicio.valor)
    res.write('Adicionei o Pet\n')
    res.end()
})

app.get('/teste', function(req, res) {
    //console.log(req.url)
    var petes =[]
    let resp = listaPets(petsha)
    console.log(resp)
    res.send(resp)
});

app.get('/', (req, res)=>{
    res.send('Seja bem vindo à tela inicial')
})

app.listen(PORT, function() {
    console.log('App de Exemplo escutando na porta 3030!');
});