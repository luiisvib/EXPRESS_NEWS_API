var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */

var clave_API = "https://jsonplaceholder.typicode.com/users"



router.get('/', function(req, res, next) {
    axios.get(clave_API).then( respuesta => {
        datos_api = respuesta.data
        res.render('api.ejs', { datos: datos_api });
    })
});

module.exports = router;