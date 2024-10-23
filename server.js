require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin:["http://localhost:5173"]
};

app.use(cors(corsOptions));

app.get("/api", (req,res)=>{
    res.json({fruits:["apple","banana","strawberry"]});

});

const port = process.env.PORT || 8080
app.listen(8080,()=>{
    console.log(`Server started on port ${port}`)
});