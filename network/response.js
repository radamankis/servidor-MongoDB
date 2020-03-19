//Manejo de respuesta que le demos a cada una de las runtas que vengan al servidor
exports.resp = (res,title,msg)=> {res.send({title,msg});
console.log(msg)
}