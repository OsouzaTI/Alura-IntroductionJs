const rd = require("readline");
const rl = rd.createInterface({
    input: process.stdin, output: process.stdout
});

let meses = ["Janeiro",
             "Fevereiro",
             "Março",
             "Abril",
             "Maio",
             "Junho",
             "Julho",
             "agosto",
             "Setembro",
             "Outubro",
             "Novembro",
             "Dezembro"];

rl.question("Digite um número de 1 a 12 : ", r=>{
    const modo1 = () =>{
        try { // Captura erro no bloco contido dentro
        r = parseInt(r); // Converte o valor de r para inteiro
        if(isNaN(r)) // verifica se o retorno da conversão acima é nulo
                throw "TypeError"
        } catch (e) { // Caso ocorra o erro ele é guardado em 'e'
                    // e esse bloco é executado.
            console.log("Tipo errado meu bom! -> "+e+" \n"); 
            return;   // retorna todo a função, pois ocorreu um erro
        }
        // Caso não ocorra um erro, ele não retornará e ira executar abaixo
        console.log(`O numero ${r} representa o mes ${meses[r-1]}.\n`)
    }

    const modo2 = () =>
    {

        if(typeof(r) )

    }

})