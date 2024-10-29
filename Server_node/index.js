const express = require("express");
const path = require("path");

const app = express();
const port = 3006;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'formulario.html'));
});

app.get('/informacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'informacion.html'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});