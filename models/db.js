const Sequelize = require('sequelize')
const Op = Sequelize.Op
const sequelize = new Sequelize(
  "cadastramento",
  "root", 
  "Mat500",
  {
    host: "localhost",
    dialect: 'mysql',
    logging: false,
    freezeTableName: true,
    operatorsAliases: {
      $and: Op.and,
      $or: Op.or,
      $eq: Op.eq,
      $gt: Op.gt,
      $lt: Op.lt,
      $lte: Op.lte,
      $like: Op.like
    }
  }
)

sequelize.authenticate().then(function(){
    console.log("Conectado no banco de dados com sucesso.")
}).catch(function(erro){
    console.log("Falha ao se conectar ao banco de dados." +erro)
})

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}