const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let canciones = []; // Array para almacenar las canciones

app.get('/canciones', (req, res) => {
    res.json({error:"endpoint pendiente"});
});

// Ruta para obtener una canción por su ID
app.get('/canciones/:id', (req, res) => {
    res.json({error:"endpoint pendiente"});
});

// Ruta para crear una nueva canción
app.post('/canciones', (req, res) => {
    res.json({error:"endpoint pendiente"});
});

// Ruta para actualizar una canción existente
app.put('/canciones/:id', (req, res) => {
    res.json({error:"endpoint pendiente"});
});

// Ruta para eliminar una canción
app.delete('/canciones/:id', (req, res) => {
    res.json({error:"endpoint pendiente"});
});

module.exports = app;
