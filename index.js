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

// Sinalizo para o Express que estamos utilizando JSON no body
app.use(express.json())

// EndPoint Create [POST] /personagem
app.post('/personagem', function(req, res) {
// Acessando o body na requisição
  const body = req.body

//Acessamos a propriedade 'nome' do body
  const novoItem = body.nome

  //Adicionamos nome na lista
  lista.push(novoItem)

  //Exibimos uma mensagem de sucesso 
  res.send('Item adicionado com sucesso:'+ novoItem)  
  
 //res.send('Create')
})


app.listen(3000)

