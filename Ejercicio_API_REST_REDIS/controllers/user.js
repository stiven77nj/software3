const { request, response } = require('express');
const redis = require('redis');

// Conexion a redis
const client = redis.createClient({
  host: 'redis',
  port: process.env.REDIS_PORT
});


// Agregar estudiantes
const addUser = ( req = request, res = response ) => {
}


// Obtener estudiantes
const getUser = ( req = request, res = response ) => {
  // Respuesta
  return res.status(201).json({
    ok: true,
    msg: 'Estudiantes uis',
  });
}


// Exportacion de los controladores
module.exports = {
  addUser,
  getUser
}