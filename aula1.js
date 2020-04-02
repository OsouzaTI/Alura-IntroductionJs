/*
    Calculo das batidas do coração
*/  
let batidasPorMinuto = 75;
convIdadeMinutos = idade => {
    return idade * 365 * 24 * 60 * batidasPorMinuto;
}
console.log(`Tenho 20 ano e meu coração bateu\
 ${convIdadeMinutos(24)}`);

/*
O Criador de galinha me falou o seguinte: "Comprei 15 galinhas por 300 reias"
Quanto ele pagou por cada galinha?
*/
let qtdGalinhas = 15;
let valorTotal  = 300;
console.log(`pagou $${valorTotal / qtdGalinhas} Por cada galinha.`);

/*
Maria foi a padaria e comprou 19 balas, depois voltou a padaria e comprou mais 45.
Quantas balas Maria tem agora?
*/
let tinha = 19;
let tem   = tinha + 45;
console.log(`Maria tem ${tem} balas`);

/*
Para calcular a área de uma circunferência usamos a seguinte fórmula: area = pi x raio x raio. O valor de pi = 3.14,
se o valor do meu raio é 2 qual a área da circunferência?
*/
let raio = 2;
const areaDaCircunferencia = raio => {return (Math.PI * raio**2).toFixed(2)};
console.log(`A área da circunferência para raio = ${raio}, é ${areaDaCircunferencia(raio)}`);