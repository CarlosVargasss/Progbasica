
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra"
    } else if(jugada == 2) {
        resultado = "Papel"
    } else if(jugada == 3) {
        resultado = "Tijera"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado
}

function combate(njugador, npc) {
    let resultado = 0;
    if(npc == njugador) {
        resultado = 0
    } else if(njugador == 1 && npc == 3) {
        resultado = 1
    } else if(njugador == 2 && npc == 1) {
        resultado = 1
    } else if(njugador == 3 && npc == 2) {
        resultado = 1
    } else {
        resultado = 2
    }
    return resultado
}



// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3)
    jugador = prompt("Elije: 1 para piedra, 2 para papel y 3 para tijera")
    let vs = ""
    //alert("Elegiste " + jugador)

    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))


    // COMBATE 
    vs = combate(jugador,pc)
    if (vs == 1) {
        triunfos = triunfos + 1
        alert("Ganaste papu")
    } else if (vs == 2) {
        perdidas = perdidas + 1
        alert("Perdiste UnU")
    }
}

alert("Ganaste " + triunfos + " veces y perdiste " + perdidas + " veces")


