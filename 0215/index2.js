const express = require("express");
const { pool } = require("./db");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

app.use(express.json());

const morgan = require("morgan");
app.use(morgan("dev"));

app.get("/user/:id", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);

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
})