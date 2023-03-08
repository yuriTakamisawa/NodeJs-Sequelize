const Sequelize = require("sequelize")
// os dois sequalizes são diferentes
// Instancia novo Sequelize
const sequelize = new Sequelize("test", "root","",{
    host: "localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso");
  }).catch((erro) => {
    console.log("Falha ao conectar " + erro);
})

const Agendamentos = sequelize.define("agendamentos", {
    nome:{
        type: Sequelize.STRING        
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    }
})
// Agendamentos.sync({force: true})

Agendamentos.create({
    nome: "Yuri Takamisawa Ribeiro",
    endereco: "Rua Lazaro Bueno",
    bairro: "Jardim Maringa",
    cep: 03525010,
    cidade: "São Paulo",
    estado:"SP",
    observacao: "Teste para aula"
})

Agendamentos.create({
    nome: "Amanda Afonso",
    endereco: "Rua das ruas",
    bairro: "Piata",
    cep: 9347432,
    cidade: "São Paulo",
    estado:"SP",
    observacao: "Teste para aula2"
})

