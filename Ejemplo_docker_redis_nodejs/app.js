const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
    socket: {
        host: 'redis-server',
        port: 6379
    }
});

client.on( 'error', err  => {
    console.log('Redis client Error', err);
});

client.connect();

// Establecer visitas iniciales
client.set('visits', 0);

// Controlador
app.get('/visitas', (req, res) => {
/*     client.get('visits', (err, visits) => {
        client.set('visits', parseInt(visits) + 1)
    }); */
    return res.json({
        success: 'ok',
        msg: `Se ha conectado correctamente`
    });
})

// Espicificacion del puerto
app.listen(8081, ()=>{
    console.log('Listening on port 8081')
})