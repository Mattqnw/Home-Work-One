const db = require('./db') 

const Cad = db.sequelize.define('cadastros',{
titulo: {
    type: db.Sequelize.STRING
},
conteudo: {
    type: db.Sequelize.TEXT
}
})

//Cad.sync({force: true})

module.exports = Cad
