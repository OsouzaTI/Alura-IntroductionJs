const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

const frases = ["Muito abaixo do peso",
                "Abaixo do peso",
                "Peso normal",
                "Acima do peso",
                "Obesidade I",
                "Obesidade II"];

const verificaIMC = (altura, peso) => {return (peso/(altura**2)).toPrecision(4)};
const faixaDePeso = IMC => {
    let p = i = indice = 0;
    p = IMC;
    const condicoes = [17    > p         ,
                       17   <= p && p <= 18.49,
                       18.5 <= p && p <= 24.99,
                       25   <= p && p <= 29.99,
                       30   <= p && p <= 34.99,
                       35   <= p && p <= 39.99,]

    condicoes.forEach( b => {
        if(b)
            indice = i;

        i++;
    });
    return frases[indice];
};

rl.question("Digite: altura(cm) peso(kg):  ", r => {
    let valores = new Array(0);
    r.split(" ").forEach(e => {
        valores.push(parseFloat(e));
    });  
    let IMC = verificaIMC(valores[0], valores[1]);  
    let result = faixaDePeso(IMC);
    console.log(`O seu IMC é: ${IMC}, ${result}.`);

    //Preguiça tomanocu
    console.log("\n"+(30+20+15+10)/4 + " essa é a media ...")
    console.log("\na velha tem ", Math.abs(1940 - 2020))

    rl.close();
})