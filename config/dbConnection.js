const mysql = require("mysql")
const {HOST,USUARIO,PASSWORD,DATABASE} = require("./config")

module.exports = () =>{
    return mysql.createConnection({    
        host: HOST,
        user: USUARIO,
        password: PASSWORD,
        database: DATABASE
    })
}
