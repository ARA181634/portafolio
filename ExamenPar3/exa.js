function bot()
{
    let fecha,fecha_de_promocion;
    fecha = document.getElementById("date_naci").value;
    fecha_de_promocion = fecha.split("-");
 

    if (fecha_de_promocion[1] == "05") {
        document.getElementById("re").innerHTML = "Felicidades obtiviste un 2*1";
        let img = document.createElement("img");
        img.src = "im.jpg";
        let src = document.getElementById("re2");
        src.appendChild(img);
      }
    else{
        document.getElementById("re").innerHTML = "Lo sentimos";
    }
}