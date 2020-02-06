let a = [1,2,3,4];
let b = [5,6,7,8];

let c = [...a, ...b]
console.log(c);

c.map((element)=>{
    console.log(element)
})

let valor = 2;
const filtro = c.filter(function(element){
    console.log(this)
    return element > this
},valor)

console.log(filtro)

// const mapa = c.map(function(element){
//     console.log(this);
//     return element 
// },valor)

const mapa = c.map((element) => {
    console.log(this.valor);
    return element; 
},valor)

console.log(mapa)


console.log("Adicionando mais uma linha aqui")

//restornar a soma das pop maior que 5000000
let cidades ={

}

let maior50000000 = cidades.map((city) => {
    return (city.pop > )
})


console.log("Novo teste")

console.log("Novo teste para verificar uso de tags")