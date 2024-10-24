require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin:[
        "http://localhost:5173",
        "http://63.176.98.7"
    ]
};

app.use(cors(corsOptions));

app.get("/api", (req,res)=>{
    res.json({fruits:["apple","banana","peach"]});

});

const port = process.env.PORT || 8080
app.listen(8080,()=>{
    console.log(`Server started on port ${port}`)
});