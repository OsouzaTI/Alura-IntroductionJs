const rd = require("readline")
const rl = rd.createInterface({
    input: process.stdin, output: process.stdout
});

let aula3 = require("./aula3.js")



let carro = null;

let km_l, hrs, vm;

rl.question("Km / l : " , r => {
    km_l = r
    carro = aula3.getCarro(km_l)
    rl.question("Hrs : ", x =>{
        hrs = x
        rl.question("vm : ", y =>{
            vm = y
            console.log(carro.combustivelGastoPorViagem(hrs, vm) + " litros")
        })
    })
})