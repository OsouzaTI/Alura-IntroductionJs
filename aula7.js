let isNumeric = (n) =>{
    return isNaN(parseInt(n));
}

let num = prompt("Digite um número: ");

if(!isNumeric(num))
{
	if(parseInt(num) > 10)
	{
		alert("Digite um número menor ou igual a 10!");
		location.reload();
	}
	else
	{
		alert("Ai sim meu patral vc ganhou um pauzão");
	}
}