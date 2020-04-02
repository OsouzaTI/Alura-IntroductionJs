
//Exercicio 1
const exec1 = () =>
{
    let br = "\n";
    let palavras = ["Ora", "bolas", "como", "não."]
    palavras.forEach(e => {
        console.log(e + br)
    });
}

class carro
{   
    constructor(km_l)
    {
        this.km_l = km_l
    }

    combustivelGastoPorViagem(hrs, vm)
    {
        return ((hrs * vm)/this.km_l)
    }

}

const exec2 = () =>
{
    //Exercicio 2

    /*
    O carro da Amanda faz 12km/l, ela viajou por 10
    horas a uma velocidade de 81km/h. 
    Quantos de litros combustível foram necessários
    para realizar essa viagem?
    */

    let c = new carro(12)
    console.log(c.combustivelGastoPorViagem(10, 81) + " litros")
}


exports.getCarro = (km_l) =>
{
    return new carro(km_l)
}