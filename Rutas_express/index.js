const express = require("express");
const path = require("path");
const pagesRoutes = require("./rutas/paginas");

const app = express();
const port = 3006;


app.use(express.static('public'));
app.use('/',pagesRoutes);

app.get('/',(req,res)=>{
    res.redirect('/principal');
});

app.get('/',(req,res)=>{
    res.redirect('/generador');
});

app.get('/',(req,res)=>{
    res.redirect('/calculadora');
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});