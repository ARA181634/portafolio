function suma()
{
    var numero1,numero2,resul;
    numero1 = document.getElementById("Num1").value;
    numero2 = document.getElementById("Num2").value;
    resul = parseInt(numero1)+parseInt(numero2);
    document.getElementById("re").innerHTML = resul;
}
function resta()
{
    var numero1,numero2,resul;
    numero1 = document.getElementById("Num1").value;
    numero2 = document.getElementById("Num2").value;
    resul = parseInt(numero1)-parseInt(numero2);
    document.getElementById("re").innerHTML = resul;
}
function multi()
{
    var numero1,numero2,resul;
    numero1 = document.getElementById("Num1").value;
    numero2 = document.getElementById("Num2").value;
    resul = (parseInt(numero1))*(parseInt(numero2));
    document.getElementById("re").innerHTML = resul;
}
function divide()
{
    var numero1,numero2,resul;
    numero1 = document.getElementById("Num1").value;
    numero2 = document.getElementById("Num2").value;
    resul = (parseInt(numero1))/(parseInt(numero2));
    document.getElementById("re").innerHTML = resul;
}