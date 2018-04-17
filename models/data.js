//creamos un objeto para ir almacenando todo lo que necesitemos
var dataModel = {};

//añadimos todo lo que necesitemos al objeto dataModel
//dataModel.msg = "Enviando datos desde un modelo";


/*dataModel.parametros = function(nombre)
{
return("Hola " + nombre);
}*/

dataModel.objeto = {
 nombre : "DESC",
 web : "www.google.com",
 edad : 28
}

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

dataModel.parametros = function(nombre){
  var respuesta = "NA"
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodejsdb");
    var myobj = [{ name: nombre, address: "Highway 37" },
                 { name: nombre, address: "Highway 37 2" }];
    //dbo.collection("users").insertOne(myobj, function(err, res) {
    dbo.collection("users").insertMany(myobj, function(err, res) {
      if (err) throw err;
      //console.log("1 document inserted");
      //console.log("Number of documents inserted: " + res.insertedCount)
      console.log("Number of documents inserted: " + res.insertedCount)
      respuesta = "Number of documents inserted: " + res.insertedCount;
      db.close();
    });
  });

  return(respuesta);
}

dataModel.msg = MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodejsdb");
  dbo.collection("users").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});

//de esta forma exportamos el objeto
module.exports = dataModel;
