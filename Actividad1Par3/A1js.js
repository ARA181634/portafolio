function suma()
{
    var num1,num2,resultado;
    /*pareseInt(); parseFloat() */
    num1 = prompt("Escribe un numero","");
    num2 = prompt("Escribe otro numero","");
    resultado = parseInt(num1)+parseInt(num2);
    alert("Resultado: "+resultado); 
}
function suma()
{
    var num1,num2,resultado;
    num1 = prompt("Escribe un numero","");
    num2 = prompt("Escribe otro numero","");
    resultado = parseInt(num1)-parseInt(num2);
    alert("Resultado: "+resultado); 
}
function multi()
{
    var num1,num2,resultado;
    num1 = prompt("Escribe un numero","");
    num2 = prompt("Escribe otro numero","");
    resultado = parseInt(num1)*parseInt(num2);
    alert("Resultado: "+resultado); 
}
function divide()
{
    var num1,num2,resultado;
    num1 = prompt("Escribe un numero","");
    num2 = prompt("Escribe otro numero","");
    resultado = parseInt(num1)/parseInt(num2);
    alert("Resultado: "+resultado); 
}
function PoN()
{
    var num1,num2,resultado;
    parseInt(num1 = prompt("Escribe un numero",""));
    if(num1<0)
        alert("Es negativo");
    else
        alert("Es postivo") 
}