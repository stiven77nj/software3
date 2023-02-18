const { Router } = require('express');

const { addUser, getUser } = require('../controllers/user');


const router = Router();


// Crear nuevo estudiante
router.post( '/addUser', addUser );

// Mostrar estudiantes
router.get( '/getUser', getUser );


// Exportacion de las rutas
module.exports = router;