const express = require('express'); // Se importa el paquete express
const cors = require('cors');
const redis = require('redis'); // Se importa el paquete redis
require('dotenv').config(); // Lee el archivo de enviroments ".env"


// !---- CONEXION A REDIS ----

const client = redis.createClient({
  host: 'redis',
  port: process.env.REDIS_PORT
});

client.on( 'error', err  => {
  console.log('Redis client Error', err);
});

client.connect();

// ! ---- Middlewares ----

// Crear el servidor de express
const app = express();

// Cors 
app.use( cors() );
// Lectura y parseo del body
app.use( express.json() );

// ! ---- Rutas ---- 

app.use( '/api/software', require('./routes/user') ); // Estudiantes


// * -----------------

// Metodo listen para correr el servidor
app.listen( process.env.PORT, () => {
    console.log(`aplicacion corriendo en el puerto... ${process.env.PORT}`);
});
