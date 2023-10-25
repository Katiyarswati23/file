const express = require('express');
const cors= require('cors');
const app = express()
const port = 4000
const mongoDB = require("./db.js");

app.use(function (req,res,next){
    res.setHeader("Access-Control-Allow-Origin","http://localhost:4000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    ); 
    next();
})
app.use(cors());
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.get('/api', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port  ${port}`)
});