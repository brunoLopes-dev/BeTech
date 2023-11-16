/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto'

export default class ProdutoController {
  public async index({}: HttpContextContract) {
    try {
      const produtos = await Produto.query().orderBy('id', 'asc').exec()
      return produtos
    } catch (error) {
      return { error: 'Erro ao buscar produtos', message: error.message }
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const produto = await Produto.findOrFail(params.id)
      return produto
    } catch (error) {
      return response.status(404).json({ message: 'Produto não encontrado' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const produto = new Produto()
      produto.nome = request.input('nome')
      produto.preco = request.input('preco')
      produto.autor = request.input('autor')
      produto.generoLiterario = request.input('genero_literario')
      produto.editora = request.input('editora')
      produto.descricao = request.input('descricao')
      await produto.save()

      return produto
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao cadastrar produto', error: error.message })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const produto = await Produto.findOrFail(params.id)
      produto.nome = request.input('nome')
      produto.preco = request.input('preco')
      produto.autor = request.input('autor')
      produto.generoLiterario = request.input('genero_literario')
      produto.editora = request.input('editora')
      produto.descricao = request.input('descricao')
      await produto.save()

      return produto
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao atualizar produto', error: error.message })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const produto = await Produto.findOrFail(params.id)
      await produto.delete()

      return response.json({ message: 'Produto excluído com sucesso' })
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao excluir produto', error: error.message })
    }
  }
}
