const Sequelize = require('sequelize');
const sequelize = new Sequelize('rede', 'root', '12345', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(() => {
    console.log("conectado com sucesso ao banco de dados.")
}).catch(err => {
    console.log("não foi possivel se conectar ai banco de dados.")
})

const Postagens = sequelize.define('posts', {

    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    liguagen: {
        type: Sequelize.STRING
    },
    bebida: {
        type: Sequelize.STRING
    },
    sociais: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.STRING
    }




});

Postagens.create({
    nome: 'teste',
    email: 'teste@teste.com.br',
    liguagen: 'java',
    bebida: 'cafe',
    sociais: 'Instagram',
    descricao: 'testeAPI'
})



