const tabs = document.querySelectorAll('.main_nav .tab')
const allTabsContent = document.querySelectorAll('.tab_content')
const tabActive = document.querySelector('.active')



// Mostrar contenido de los tabs
const selectTab = (show_id) => {
    allTabsContent.forEach( e => e.classList.remove('active'))
    const id = document.querySelector(show_id)
    id.classList.add('active')
}


// Redirigir tabs desde un boton externo
const selectTabFromButton = (query, id_destino) => {
    const getQuery = document.querySelector(query)
    getQuery.onclick = () => selectTab(id_destino)
}

tabs[0].onclick = () => selectTab('#inicio')
tabs[1].onclick = () => selectTab('#sobre_mi')
tabs[2].onclick = () => selectTab('#habilidades')
tabs[3].onclick = () => selectTab('#experiencia')
tabs[4].onclick = () => selectTab('#educacion')
tabs[5].onclick = () => selectTab('#proyectos')
tabs[6].onclick = () => selectTab('#testimonios')
tabs[7].onclick = () => selectTab('#contacto')

selectTabFromButton('#inicio_btn', '#proyectos')
