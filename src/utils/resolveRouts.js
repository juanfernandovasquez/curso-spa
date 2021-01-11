//Este se encargará de que después de obtener la ruta que quiere el usuario, saber qué 
// template va a buscar

const resolveRouts = (route) => {
    //Esta función pasará la ruta obtenida por la función anterior
    //Tengo que hacer un if. Al analizar el proyecto, tiene n cantidad de personajes.

    if(route.length <= 3){
        let validRoute = route === '/' ? route : '/:id'
        return validRoute
    }

    return `/${route}` //about

}

export default resolveRouts