const mysql = require("mysql")
const {HOST,USUARIO,PASSWORD,DATABASE} = require("./config")

module.exports = () =>{
    return mysql.createConnection({   //Podemos usar el createPool para aplicaciones grandes
        host: HOST,
        user: USUARIO,
        password: PASSWORD,
        PORT: 3306,
        database: DATABASE
    })
}
