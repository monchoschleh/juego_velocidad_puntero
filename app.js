let tiempo = new Date().getTime();
aparecerforma
let nivel = 2000
let puntaje = 0
let promedio = Array ()
let total = 0
let tiempo5 = 0
let tiempopromedio = 0

function chooselevel () {
    let dificultad = document.getElementById("nivel").value;
    if (dificultad == 1) {
        nivel = 1500;
    } else if (dificultad == 2) {
        nivel = 800;
    } else if (dificultad == 3) {
        nivel = 500;
    } else if (dificultad == 4) {
        nivel = 300;
    } else if (dificultad == 5) {
        nivel = 100;
    }
}

document.getElementById("cuadrado1").onclick = function() {
    document.getElementById("cuadrado1").style.display = "none";
    let tiempo2 = new Date().getTime();
    let tiempo3 = tiempo2 - tiempo
    tiempo4 = tiempo3 / 1000
    tiempo5 = tiempo5+ tiempo4;
    tiempopromedio = tiempo5 / promedio.length;
    tiempofix = tiempopromedio.toFixed(3);
    promedio.push (`${tiempo4}`)
    puntaje = puntaje + 1
    document.getElementById("aciertosPuntaje").innerHTML = puntaje;
    if (tiempopromedio !== Infinity) {
        document.getElementById("tiempopromedio").innerHTML = tiempofix+"s";
    }
     document.getElementById("texto").innerHTML = "Tiempo de reaccion: " + tiempo4+"s";
    setTimeout (aparecerforma,`${nivel}`)
}

function aparecerforma () {
    let top = Math.random()*550;
    let left = Math.random()*1000;
    let width = Math.random()*200+20;
    let height = Math.random()*200+20;
    let radius = Math.random()*50;
    let color = Math.floor(Math.random()*6);
    if (color == 0) {
        document.getElementById("cuadrado1").style.backgroundColor = "red";
    } else if (color == 1) {
        document.getElementById("cuadrado1").style.backgroundColor = "yellow";
    } else if (color == 2) {
        document.getElementById("cuadrado1").style.backgroundColor = "Blue";
    } else if (color == 3) {
        document.getElementById("cuadrado1").style.backgroundColor = "green";
    } else if (color == 4) {
        document.getElementById("cuadrado1").style.backgroundColor = "orange";
    } else if (color == 5) {
        document.getElementById("cuadrado1").style.backgroundColor = "black";
    }
    document.getElementById("cuadrado1").style.top = top+"px";
    document.getElementById("cuadrado1").style.left = left+"px";
    document.getElementById("cuadrado1").style.width = width+"px";
    document.getElementById("cuadrado1").style.height = height+"px";
    document.getElementById("cuadrado1").style.display = "block";
    document.getElementById("cuadrado1").style.borderRadius = `${radius}%`;
    tiempo = new Date().getTime();
}

function perdiste () {
    document.getElementById("cuadrado1").style.backgroundColor = "black"
    document.getElementById("cuadrado1").style.color = "white"
    document.getElementById("cuadrado1").innerHTML = "<p> ¡Perdiste!</p><p>Reiniciando</p>"
    document.getElementById("fondo").style.backgroundColor = "black"
    document.getElementById("cabecera").style.color = "white"
    setTimeout (reiniciar,8000);
}

function reiniciar () {
    location.reload();
}

function co () { 
    document.getElementById("cookies").style.display = "none";
 }

document.getElementById("botonCookies").onclick = co;
document.getElementById("fondo").onclick = perdiste;
document.getElementById("botonNivel").onclick = chooselevel;
document.getElementById("cookies").style.display = "none";
