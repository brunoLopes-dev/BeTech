/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('signup', 'AuthController.signup')
  Route.post('login', 'AuthController.login')

  Route.group(() => {
    Route.resource('clientes', 'ClientesController').apiOnly()
    Route.resource('produtos', 'ProdutosController').apiOnly()
    Route.resource('vendas', 'VendasController').apiOnly().except(['destroy'])
  }).middleware('auth:api')
})
