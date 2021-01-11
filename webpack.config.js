const path = require('path'); //path es de node. Permite acceder hacia dónde estamos dentro de las carpetas. O a dónde nos estamos moviendo dentro del proyecto sin importar si estamos dentro del desarrollo local o en la nube.
const HtmlWebPackPlugin = require('html-webpack-plugin');
//Este archivo servirá para poder trabajar con html. 
const CopyWebpackPlugin = require('copy-webpack-plugin')



//Ahora crearemos un módulo donde viene la configuración de lo que va a suceder

module.exports = {
    entry: './src/index.js',
    //primero le decimos donde está el archivo de entrada
    output: {
        //donde pondremos el proyecto estructurado y compilado listo para mandarse a producción.
        path: path.resolve(__dirname,'dist'),
        //hacia dónde lo voy a poner. Resolve es para saber dónde se encuentra. __dirname sirve para decirle que donde se encuentre
        //ahí se pondrá una nueva carpeta. Y en este caso, se creará la carpeta dist. 
        filename: 'main.js'
        //ya que hice esto, tengo que decirle cómo se llamará el archivo que voy a generar. De esta forma, el compilado de nuestro 
        //proyecto en js se llamará main.js cuando esté listo para producción.
    },
    resolve: {
        //Ahora, para trabajar sobre las extensiones de nuestro proyecto, para eso usaremos resolve.
        extensions: ['.js']
        //Y Entonces, le pasaré un arreglo de las extensiones que voy a utilizar. En este caso solo utilizaré extensión js y por esp
        //solo le pasaré un elemento
    },
    module:{
        //Ahora crearé un módulo con las reglas necesarias que voy a trabajar
        //En este caso, crearé las reglas de babel  para que nuestro proyecto sea compatible con todos los navegadores
        rules:[{
            //En las reglas vamos a crear estas mismas. Estas son pasadas por arreglo. Y ahora generaremos los elementos que 
            //necesitamos. La primera es la estructura.
            //El primero será un test que servirá para identificar a los archivos que se encientran en nuestro entorno. Y tendrá
            //un rejex. 
            test: /\.js?$/,
            //Ahora tengo que exluir los node_modules. Y así exluyo todo lo que encuentre ahi de js
            exclude: /node_modules/,

            use:{
                //ahora vamos a decir que va a usar un loader para trabajar con nuestro código. Este será el que instalamos.
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        //Ahora tengo que establecer los plugins que voy a utilizar.
        new HtmlWebPackPlugin(
            //aquí estableceré lo que necesito 
            {
                inject: true,

                template: './public/index.html',
                //lugar del template principal
                filename: './index.html',
                //a donde lo tenemos que guardar o mandar.
            }
        ),
        new CopyWebpackPlugin([{
            from: '/src/styles/styles.css',
            to: ''
        }])
    ]

}