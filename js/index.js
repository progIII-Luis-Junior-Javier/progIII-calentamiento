
function iniciar(){
    const mainNav = document.querySelector('.main-nav')
    const navBarToggle = document.querySelector('#navbar-toggle')

    navBarToggle.addEventListener('click', e =>
        mainNav.classList.toggle('active')
    )

    const options = document.querySelectorAll('.main-nav a')

    options.forEach(option => option.addEventListener('click', manageOptions))

    const sections = document.querySelectorAll('#article section')

    sections.forEach(section => section.addEventListener('click', manageOptions))

    options.forEach(pag => pag.addEventListener('click', loadPage))
}

/**
 * Carga una página en en la SPA según el valor de event.target
 * @param {Event} event 
 */
async function loadPage(event) {
    document.querySelector('.main-nav').classList.remove('active')
    event.preventDefault()
    const option = event.target.text
    console.log(option)
    const container = document.querySelector('main')
    let url = ''
    let response = ''
    let html = ''
    switch (option) {
        case 'Registro':
            url = './html/register.html'
            response = await fetch(url)
            html = await response.text()
            container.innerHTML = html

            document.querySelector('#boton-enviar').addEventListener('click', enviarDatos)
            console.log(numero)
            break;
        case 'Listado':
            url = './html/list.html'
            response = await fetch(url)
            html = await response.text()
            container.innerHTML = html

            document.querySelector("#boton-buscarNumber").addEventListener('click', enviarBusquedaNumber)

            break;
        default:
            if (option !== 'Inicio') {
                console.log(
                    `No hay definido un caso para la opción '${option}'`
                );
            } else {
                url = './html/register.html'
                response = await fetch(url)
                html = await response.text()
                container.innerHTML = html
            }
            // cargar inicio.html
            break;
    }

}

function manageOptions(event) {
    //event.preventDefault()
    console.log(`Ha pulsado sobre la opción ${event.target.innerText}`)
}



let carta


function enviarDatos() {

    const nombre = document.querySelector('#cardName').value
    const numero = document.querySelector('#cardNumber').value
    const tipoCarta = document.querySelector('#typeCard').value
    const costoJuego = document.querySelector('#playCost').value
    const color = document.querySelector('#colorCard').value
    const nivel = document.querySelector('#levelCard').value
    const poder = document.querySelector('#power').value
    const atributo = document.querySelector('#attribute').value
    const stageLevel = document.querySelector('#stageLevel').value
    const rareza = document.querySelector('#rarity').value
    carta = {
        cardName: nombre,
        cardNumber: numero,
        typeCard: tipoCarta,
        playCost: costoJuego,
        colorCard: color,
        levelCard: nivel,
        power: poder,
        attribute: atributo,
        stageLevel: stageLevel,
        rarity: rareza
    }


   enviar(carta)
   
}



function enviar(carta) {
    fetch(`http://localhost:3000/card`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carta)
    }).then(function (res) {
        if (res.ok) {
            res.json()
                .then(function ({ data }) {
                    console.log(data)
                })
        }
    })
}




//------------------------JAVIER

function enviarBusquedaNumber(){
    const numero = document.querySelector('#cardNumber').value    
    buscarNumber(numero)
    
}

function buscarNumber(numeroCarta){
    const url= `http://localhost:3000/card/bycardNumber/:${numeroCarta}`
    fetch(url, {
        method:"get",
        headers: {
            'Content-Type': 'application/json'
        },url: JSON.stringify(numeroCarta)
    }).then(function (res) {
        if (res.ok){
            res.json().then(function ({ data }) {
                console.log(data)
            })
        }
    })
}

window.addEventListener('load', iniciar)