//Maneja las peticiones http usando express.Router

var express = require('express');
var controller = require('./controller')
var response = require('../../network/response')
var router = express.Router();

router.post('/login',(req,res)=> {
        controller.val(req.body.user, req.body.pass)
        .then(respController => response.resp(res,respController.title, respController.msg))
        .catch(respController => response.resp(res,respController.title, respController.msg))
        
    })


module.exports = router