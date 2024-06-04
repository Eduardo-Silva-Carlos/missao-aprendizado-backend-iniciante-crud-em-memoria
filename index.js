const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const lista = ['Java', 'Kotlin', 'Android']

// EndPoint Read All '[GET] /personagem'

app.get('/personagem', function (req, res) {
  res.send(lista.filter(Boolean))
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
app.post('/personagem', function (req, res) {
  // Acessando o body na requisição
  const body = req.body

  //Acessamos a propriedade 'nome' do body
  const novoItem = body.nome

  //Checa se o 'nome' esta presente no body
  if (!novoItem) {
    return res.send('Corpo da requisição conter a propriedade `nome`.')
  }
  // Checa se o novoItem está na lista ou não
  if (lista.includes(novoItem)) {
    return res.send('Esse item já existe na lista!')
  }

  //Adicionamos nome na lista
  lista.push(novoItem)

  //Exibimos uma mensagem de sucesso 
  res.send('Item adicionado com sucesso:' + novoItem)

})

//EndPoint Update [PUT]/personagem/:id 
app.put('/personagem/:id', function (req, res) {
  //Acessamos o ID dos parâmetros da rota
  const id = req.params.id

  // Acessamos o Bory de requisição 
  const bory = req.body

  // Acessamos a propriedade nome do Bory
  const novoItem = bory.nome

  //Checa se o 'nome' esta presente no body
  if (!novoItem) {
    return res.send('Corpo da requisição conter a propriedade `nome`.')
  }
  // Checa se o novoItem está na lista ou não
  if (lista.includes(novoItem)) {
    return res.send('Esse item já existe na lista!')
  }
  // Atualizamos na lista o novoItem pelo Id - 1 
  lista[id - 1] = novoItem

  // Eviamos uma mensagem de sucesso 
  res.send('Item atualizado com sucesso : ' + id + '-' + novoItem)

})
// EndPoint delete [DELETE]/personagem/:id 
app.delete('/personagem/:id', function (req, res) {
  // Acessamos o parâmentro de rota 
  const id = req.params.id

  //Remover o item da lista isando id - 1
  delete lista[id - 1]
  // Enviamos uma mensagem de sucesso
  res.send('Item removido com sucesso : ' + id)
})

app.listen(3000)

