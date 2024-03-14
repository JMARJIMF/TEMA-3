function Comprobar() {
    let nota;
    nota = parseInt(document.getElementById("nota").value);
    if(nota<=10){
        if(nota >10)
        document.getElementById("solucion").innerHTML = "Sobresaliente";
        if(nota >9)
        document.getElementById("solucion").innerHTML = "Sobresaliente";
        if(nota >8)
            document.getElementById("solucion").innerHTML = "Notable";
        else if (nota >=7)
            document.getElementById("solucion").innerHTML = "Notable";
        else if (nota >=6)
            document.getElementById("solucion").innerHTML = "Bien";
        else if (nota >=5)
            document.getElementById("solucion").innerHTML = "Suficiente";
        else if (nota >=4)
            document.getElementById("solucion").innerHTML = "Suspenso";
        else if (nota >=3)
            document.getElementById("solucion").innerHTML = "Suspenso";
        else if (nota >=2)
        document.getElementById("solucion").innerHTML = "Suspenso";
        else if (nota >=1)
        document.getElementById("solucion").innerHTML = "Suspenso";
}else {
    document.getElementById("solucion").innerHTML = "Este número no es válido"
}


}