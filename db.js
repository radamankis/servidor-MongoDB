/*realizando la configuracion para la conexion con MongoDB */ 

var db = require("mongoose");

let connect = url => {
    db.connect(url, {
        'useNewUrlParser': true,
        'useUnifiedTopology':true
    })
    .then(()=>console.log("Conectado a MongoDB"))
    .catch(()=>console.log("No se ha podido conectar a MongoDB"))
}

module.exports= connect