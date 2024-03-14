function mostrarmensaje() { 
let numero1;
let numero2;
let a,b,c,d,e;
numero1 = parseInt(document.getElementById("numero1").value,10);
numero2 = parseInt(document.getElementById ("numero2").value ,0);
a= numero1+numero2;
b=numero1-numero2;
c=numero1*numero2;
d=numero1/numero2;
e=numero1%numero2;

document.getElementById("mensaje").innerHTML="el primer numero es:"+numero1 +"<br>El segundo número es: " + numero2 + "<br>el resultado es: " + a + "<br>el resultado es: " + b + "<br>el resultado es: " + c + "<br>el resultado es :" + d + "<br>El resultado es: " + e;


}