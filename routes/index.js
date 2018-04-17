var express = require('express');
var router = express.Router();

//llamamos al modelo data.js para utilizar toda su funcionalidad
var dataModel = require('../models/data');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(dataModel.msg);
  res.render('index', { title: dataModel.msg, title2: "test title" });
});

//si abrimos http://localhost:3000/parametros/juan y miramos la terminal
 //veremos Hola juan, esta es la forma de recoger parámetros via get
 //con el objeto params del objeto req
    router.get("/parametros/:nombre", function(req, res){
        var respuesta = dataModel.parametros(req.params.nombre);
        //res.end();
        res.render('index', { title: respuesta });
    });

    //si accedemos a http://localhost/3000 y miramos la terminal veremos
    //Israel tiene 32 años y una web que se llama https://www.uno-de-piera.com
    router.get("/objeto", function(req,res){
      var objeto = dataModel.objeto;
      var respuesta = objeto.nombre + " tiene " + objeto.edad + " años y una web que se llama " + objeto.web;
      //res.end();
      res.render('index', { title: "Welcome2", title2: "just test"});
    });

module.exports = router;
