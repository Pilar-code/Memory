let iconos
let nuevoJuego = document.getElementById("nuevoJuego")
let seleccion = []

generarTablero()

function cargarIconos() {
    iconos = [
        '<img src="https://img.icons8.com/wired/64/000000/bt21-koya.png"/>',
        '<img src="https://img.icons8.com/wired/64/1A1A1A/pelican--v1.png"/>',
        '<img src="https://img.icons8.com/wired/64/000000/butterfly.png"/>',
        '<img src="https://img.icons8.com/wired/64/000000/alpaca.png"/>',
        '<img src="https://img.icons8.com/wired/64/000000/cat.png"/>',
        '<img src="https://img.icons8.com/wired/64/000000/cat-footprint.png"/>',
        '<img src="https://img.icons8.com/wired/64/000000/turtle.png"/>',
        '<img src="https://img.icons8.com/wired/64/000000/sloth.png"/>',
        '<img src="https://img.icons8.com/wired/64/000000/red-panda.png"/>',
        '<img src="https://img.icons8.com/wired/64/000000/kiss-panda.png"/>',
        '<img src="https://img.icons8.com/wired/64/000000/seahorse.png"/>',
        '<img src="https://img.icons8.com/wired/64/000000/aquarium.png"/>',
    ]
}

function generarTablero() {
    cargarIconos()
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    seleccion = []
    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
            <div class="areaTarjeta" onclick="seleccionarTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara Trasera" id="trasera${i}">
                        ${iconos[0]}
                    </div>
                    <div class="cara Delantera">
                        <img src="https://img.icons8.com/ios-filled/50/000000/puzzle.png"/>
                    </div>
                </div>
            </div>`
        )
        if (i%2 == 1){
            iconos.splice(0,1)
        }
    }
    nuevoJuego.addEventListener('click', () => {
        generarTablero();
    })
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

nuevoJuego.addEventListener('click', () => {
    generarTablero();
})


function seleccionarTarjeta (i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform = "rotateY(180deg)"
        seleccion.push(i)
    }
    if(seleccion.length == 2){
        deseleccionar(seleccion)
        seleccion = []
    }
}

function deseleccionar(seleccion) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + seleccion[0])
        let trasera2 = document.getElementById("trasera" + seleccion[1])
        if (trasera1.innerHTML != trasera2.innerHTML){
            let tar1 = document.getElementById("tarjeta" + seleccion[0])
            let tar2 = document.getElementById("tarjeta" + seleccion[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else {
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
    }, 100);
}