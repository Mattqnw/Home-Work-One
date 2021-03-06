const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Cad = require('./models/Cad')
//Config
  //Template Engine 

 app.engine('handlebars', handlebars({defaultLayout:'main'}))
 app.set('view engine', 'handlebars')

//body-parser 

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Rotas

  app.get('/', function(req,res){
    Cad.all({order: [['id', 'DESC']]}).then(function(cads){
      res.render(__dirname+ '/views/layouts/home', {cads: cads})
    })
    //res.render(__dirname+ '/views/layouts/home', {cads: cads})
  })
  //cadastro dos forms
 app.get('/cad', function(req,res){
    res.render(__dirname + '/views/layouts/formulario')

 })
//form postagens
 app.post('/form', function(req,res){
   Cad.create({
     titulo: req.body.titulo,
     conteudo: req.body.conteudo
   }).then(function(){
     res.redirect('/')
    }).catch(function(erro){
       res.send("houve um erro: "+erro)
     })
   })
   
  //res.send("Texto: "+req.body.titulo+" Conteudo:"+req.body.conteudo)

  //Deletar postagens 
  app.get('/deletar/:id',function(req,res){
   Cad.destroy({where: {'id': req.params.id}}).then(function(){
   res.send("Postagem deletada com sucesso!")
   }).catch(function(erro){
     res.send("Esta postagem não existe! ")
   })

  })

 //Conexão Localhost porta 8081
app.listen(8081, function(){

    console.log("Servidor rodando!");
});