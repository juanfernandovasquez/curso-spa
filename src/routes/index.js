import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRouts from '../utils/resolveRouts'

//Como buena práctica no se pone la extensión
//porque es obvio gracias a babel y es compilado por webpack

//Rutas
const routes = {
    '/': Home,
    //La primera ruta será el / porque este
    //hará render de hombre
    '/:id': Character,
    //Este se establece de esta forma porque
    //el id será un valor dinámico. Esto significa
    //que según el id que regrese la lista de personajes 
   //es la segcion a la que lo mandaré
   //Entonces yo no sé qué personaje será 
   //Por eso pongo así este valor dinámico
   '/contact': 'Contact',


}

const router = async () => {
    //Establecer los templates que tenemos hacia un elemento del dom
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')

    header.innerHTML = await Header()
    let hash = getHash()
    let route = await resolveRouts(hash)
    let render = routes[route] ? routes[route] : Error404
    content .innerHTML = await render()
}


export default router