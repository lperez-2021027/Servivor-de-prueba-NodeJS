//  Foma mas antigua de hacer un server en nodejs
/*
var http = require('http');

// Creando el servidor (nivel local)
http.createServer(function (req, res) { // Callback 
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    res.end('Hola');
}).listen(3000); // En que puerto estara montado el servidor

console.log('Servidor activo, escuchando todos los cambios');
*/

/*
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/kinal' , (req, res) => {
//     res.send('Bienvenidos a kinal');
// })

app.get('/contacto' , (req, res) => {
    res.send('Contacto oficial de la pagina');
})

app.post('/home' , (req, res) => {
    res.send('Bienvenidos a kinal');
})

app.put('/editar/1' , (req, res) => {
    res.send('Editando usuario con id 1');
})

app.delete('/borrar/1' , (req, res) => {
    res.send('Eliminando usuario 1');
})

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`)
})