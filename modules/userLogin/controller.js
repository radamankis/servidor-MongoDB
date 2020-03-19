//La logica de negocio

var store = require('./store');

var validateLog = (user,pass) =>{
    return new Promise(async(resolve, reject)=>{
        let login = {user,pass}
        console.log(login)
        let val = await store.valLog(login)
        console.log(val)
        val.length!=0
        ? resolve({ title : "success", msg : val})
        : reject({ title : "error" , msg : " Usuario o Contraseña Invalida"})
    })
}

module.exports= {
    val : validateLog
}