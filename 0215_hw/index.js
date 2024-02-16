// const { pool } = require("./db");

const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8080;

const morgan = require("morgan");
app.use(morgan("dev"));

//localhost:8080/user/123?name=chicken
app.get("/user/:id", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    try {
        if (req.params.id && req.query.name) {
            return res.json({
                getid:true,
                id: req.params.id,
                name: req.query.name,
            })
        }
        return res.json({getid: false})
    } catch (error) {
        return res.json({getid: false})
    }
});

app.post("/user", (req, res) => {
    try {
        console.log(req.body);
        if (req.body) {
            return res.json({
                signup: true,
                id: req.body.id,
                password: req.body.password,
            })    
        }
        return res.json({signup: false})
    } catch (error) {
        return res.json({signup: false})
    }
});

app.patch("/user/:id", (req, res) => {
    console.log(req.params);
    console.log(req.body);

    try {
        
        if (req.body && req.params) {
            return res.json({
                update: true,
                id: req.params.id,
                name: req.body.name,
            })    
        }
        return res.json({signup: false})
    } catch (error) {
        return res.json({signup: false})
    }
});


app.delete("/user/:id", (req, res)=> {
    console.log(req.params);
    try {
        if (req.params){
            return res.json({
                delete: true,
                id: req.params.id,
            })
        }
        return res.json({
            delete: false
        })
    } catch (error) {
        return res.json({
            delete: false
        })
    }
});

    

app.listen(PORT, () => `this application is runnunbg in ${PORT}`)