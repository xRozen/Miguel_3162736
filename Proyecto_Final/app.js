const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./configbd');

const app = express();
const port = 3000;

// Configuraciones de Express
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Mostrar todos los libros
app.get('/', (req, res) => {
    db.query('SELECT * FROM libros', (err, resultados) => {
        if (err) throw err;
        res.render('index', { libros: resultados });
    });
});

// Ruta para mostrar formulario de agregar
app.get('/agregar', (req, res) => {
    res.render('agregar');
});

// Ruta para procesar agregar libro
app.post('/agregar', (req, res) => {
    const { titulo, autor, genero, editorial, año, isbn, cantidad, ubicacion } = req.body;
    const query = 'INSERT INTO libros (titulo, autor, genero, editorial, año, isbn, cantidad, ubicacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [titulo, autor, genero, editorial, año, isbn, cantidad, ubicacion], (err) => {
        if (err) {
            // Manejar error de duplicado de ISBN
            if (err.code === 'ER_DUP_ENTRY') {
                return res.render('agregar', { error: 'El ISBN ya existe en la base de datos' });
            }
            throw err;
        }
        res.redirect('/');
    });
});

// Ruta para mostrar formulario de edición
app.get('/editar/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM libros WHERE id_libro = ?', [id], (err, resultado) => {
        if (err) throw err;
        res.render('editar', { libro: resultado[0] });
    });
});

// Ruta para procesar edición
app.post('/editar/:id', (req, res) => {
    const id = req.params.id;
    const { titulo, autor, genero, editorial, año, isbn, cantidad, ubicacion } = req.body;
    const query = 'UPDATE libros SET titulo=?, autor=?, genero=?, editorial=?, año=?, isbn=?, cantidad=?, ubicacion=? WHERE id_libro=?';
    
    db.query(query, [titulo, autor, genero, editorial, año, isbn, cantidad, ubicacion, id], (err) => {
        if (err) {
            // Manejar error de duplicado de ISBN
            if (err.code === 'ER_DUP_ENTRY') {
                return res.render('editar', { error: 'El ISBN ya existe en la base de datos', libro: req.body });
            }
            throw err;
        }
        res.redirect('/');
    });
});

// Ruta para eliminar
app.get('/eliminar/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM libros WHERE id_libro = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});