
const express = require ("express")
const app = express();
const port = 8080;
const path = require ("path")
const basePath = path.join(__dirname,"templates")

app.get("/", (req, res) =>{
    res.send ("frutas ")
    })

app.get("/abacaxi", (req, res) =>{
res.send ("abacaxi")
})

app.get("/morango", (req, res) =>{
    res.send ("morango")
    })

    app.get("/melancia", (req, res) =>{
        res.send ("melancia")
        })
    
app.listen(port =>{
console.log (`rodando servidor na porta ${port}`);

})


