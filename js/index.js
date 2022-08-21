document.addEventListener('DOMContentLoaded', async () => {
    const mainNav = document.querySelector('.main-nav')
    const navBarToggle = document.querySelector('#navbar-toggle')

    navBarToggle.addEventListener('click', e =>
        mainNav.classList.toggle('active')
    )

    const options = document.querySelectorAll('.main-nav a')

    options.forEach(option => option.addEventListener('click', manageOptions))

    const sections = document.querySelectorAll('#article section')

    sections.forEach(section => section.addEventListener('click', manageOptions))

   // const clearMain = document.querySelector('#clear-main')

   /**
    * clearMain.addEventListener('click', e =>
        document.querySelector('.main').innerHTML = ''
    ) */ 

    //--------------------
    /*const container = 'main'
    const element = document.querySelector(container)
    const url = './resources/html/inicio.html'

    const response = await fetch(url)
    console.log(response)
    const html = await response.text()

    element.innerHTML = html
*/
    options.forEach(pag => pag.addEventListener('click', loadPage))
})

/**
 * Carga una página en en la SPA según el valor de event.target
 * @param {Event} event 
 */
 async function loadPage(event){
    document.querySelector('.main-nav').classList.remove('active')
    event.preventDefault()
    const option = event.target.text
    console.log(option)
    const container = document.querySelector('main')
    let url = ''
    let response = ''
    let html = ''
    switch(option){
        case 'Registro':
            url = './html/register.html'
            response = await fetch(url)
            html = await response.text()
            container.innerHTML = html
            break;
        case 'Listado':
            url = './html/list.html'
            response = await fetch(url)
            html = await response.text()
            container.innerHTML = html
            break;
        default:
            if (option !== 'Inicio') {
                console.log(
                    `No hay definido un caso para la opción '${option}'`
                );
            }else{
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
