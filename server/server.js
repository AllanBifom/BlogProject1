const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "qwertyuiop",
    database: "users"
});

app.post('/register', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    db.query("INSERT INTO customers (Username, Password) VALUES (?,?)",
    [username, password],
    (err, result) => {
        console.log(err);
    })
})
app.post('/staffregister',(req, res)=> {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    db.query("INSERT INTO staff (Firstname, Lastname, Username, Password, Email) VALUES (?,?,?,?,?)",
    [firstname, lastname, username, password, email],
    (err, result) => {
        console.log(err)
    })
});

app.post('/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT * FROM customers WHERE Username = ? AND Password = ?",
    [username, password],
    (err, result) => {
        if(err){
            res.send ({err: err});
        }
        if (result.length > 0){
            res.send(result);
        } else {
            res.send({message: "Wrong username/password combination"})
        }

    })
})

app.post('/stafflogin', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT * FROM staff WHERE Username = ? AND Password = ?",
    [username, password],
    (err, result) => {
        if(err){
            res.send ({err: err});
        }
        if (result.length > 0){
            res.send(result);
        } else {
            res.send({message: "Wrong username/password combination"})
        }

    })
});
app.get('/staff/all',(req,res) => {
    db.query("SELECT * FROM staff",(err,result) => {
        if(err){
            res.send ({err: err});
        }
        else if (result.length > 0){
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("running server");
});
