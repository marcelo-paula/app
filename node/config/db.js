const mysql = require("mysql")

const host = "localhost"
const user = "root"
const password = ""
const database = "appnode"

const connection = mysql.createConnection({
    host: host,
    user: user,
    pssword: password,
    database: database
})

connection.connect((error) => {
    if(error) {
        throw error
    }

    console.log("Conectado com sucesso no banco de dados " + database)
})

module.exports = connection