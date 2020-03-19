/* 
Manejo de rutas

*/

var userLogin = require('../modules/userLogin/network');

var router = server => {
    server.use('/userLogin',userLogin)
}

module.exports = router