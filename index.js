const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const lista = ['Java', 'Kotlin', 'Android']

  // EndPoint Read All '[GET] /personagem'

app.get('/personagem', function (req, res) {
  res.send(lista)
})

  // EndPoint Read BY ID [GET]/personagem/:id
app.get('/personagem/:id', function (req, res) {
  // Acessando os parametros de rota ID
  const id = req.params.id

  // Acessa o item na lista com id - 1
  const item = lista[id - 1]
  //Enviamos o item como resposta 

  res.send(item)
})

app.listen(3000)

