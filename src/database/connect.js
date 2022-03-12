const mongoose = require("mongoose");

const connectToDatabase = async() => {
    await mongoose.connect(process.env.MONGODB_URI, (error) => {
        if(error) {
            return console.log('Ocorreu um erro ao se conectar ao band de dados', error)
        }

        return console.log('Conexão ao banco de dados realizada com suceso')
    });
}

module.exports = connectToDatabase;