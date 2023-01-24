var express = require('express');
var router = express.Router();
var dbConnection = require("../config/dbConnection")


const conexion = dbConnection()

/* GET home page. */
router.get('/',  function(req, res, next) {
    res.redirect("/news/0/4")
});

router.get('/:x/:y',  function(req, res, next) {
    var {x, y} = req.params 
    var final = Number(x)+4
    conexion.query(`Select * from news limit ${x},${y}`, (err, result) =>{
        res.render("news",{
            news: result,
            final: final
        });
    })
});

router.post("/",  function(req, res, next) {
    console.log(req.body)
    const {title, news} = req.body
    conexion.query("Insert into news SET ?", {
        title,
        news
    }, (error, result)=>{
        res.redirect("/news/0/4")
    })
});

router.put("/", function(req,res) {
    window.reload();
})

module.exports = router;



// drop database if exists news_portal;

// CREATE DATABASE news_portal;
// USE news_portal;

// CREATE TABLE news (
//     id_news INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
//     title VARCHAR(100),
//     news TEXT,
//     data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
