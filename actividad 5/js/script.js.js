function mostrarmensaje(){
let numero1
let numero2
let a,b,c,d,e
numero1 = parseInt(document.getElementById("numero1").value,6)
numero2 =parseInt(document.getElementById ("numero 2").value ,2)
a= numero1+numero2
b=numero1-numero2
c=numero1*numero2
d=numero1/numero2
e=numero1%numero2

document.getElementsByClassName("mensaje").InnerHTML="el primer numero es:"+numero1 +"<br>El segundo número es: " + numero2 + "<br>el resultado es: " + a + "<br>el resultado es: " + b + "<br>el resultado es: " + c + "<br>el resultado es :" + d + "<br>El resultado es: " + e



}