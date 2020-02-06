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
