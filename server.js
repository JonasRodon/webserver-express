const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')
const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, 'public')))
// Express HBS engine
hbs.registerPartials(path.join(__dirname, '/views/parciales'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  // res.send('Hola Mundo')
  // let salida = {
  //   nombre: 'Jonas',
  //   edad: 36,
  //   url: req.url
  // }
  // res.send(salida)
  res.render('home', {
    nombre: 'joNas RoDon'
  })
})
app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`)
})
