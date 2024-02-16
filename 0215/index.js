// const express = require("express");
// const { pool } = require("./db");
// const app = express();
// const PORT = 8080;
// const cors = require("cors");
// app.use(cors());

// app.use(express.json());

// const morgan = require("morgan");
// app.use(morgan("dev"));

// // test 용
// app.get("/", (req, res)=> {
//     return res.json({
//         name: "jony",
//     });
// });

// // 실전
// app.get("/api/menus", async(req,res) => {
//     try {
//         const data = await pool.query("SELECT * FROM menus");
//         // return res.json(data[0]);
//         if(data[0]){
//             return res.json(data[0]);
//         }
//     } catch (error) {
//         return res.json(error)
//     }
// })

// app.get("/api/menus/:id", async (req,res) => {
//     try {
//         console.log(req.params);
//         console.log(req.query)
//         const data = await pool.query(`SELECT * FROM menus WHERE menu_id = ${req.params.id}`);
//         if(data[0]){ 
//             return res.json(data[0]);
//         }
//     } catch (error) {
//         return res.json(error)
//     }
// })


// app.post("/api/menus", async (req, res) => {
//     try {
//         const data = await pool.query(
//         "INSERT INTO menus (menu_name, menu_description) VALUES (?, ?)",
//         [req.body.menu_name, req.body.menu_description]
//         );
//         return res.json(data);
//     } catch (error) {
//         return res.json(error);
//     }
// });
    



// app.listen(PORT, () => `this application is running in ${PORT}`);

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