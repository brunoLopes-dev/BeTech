import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Venda from 'App/Models/Venda'

export default class VendaController {
  public async index({}: HttpContextContract) {
    try {
      // Modificado para ordenar por id
      const vendas = await Venda.query().orderBy('id', 'asc').exec()
      return vendas
    } catch (error) {
      return { error: 'Erro ao buscar vendas', message: error.message }
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const venda = await Venda.findOrFail(params.id)
      return venda
    } catch (error) {
      return response.status(404).json({ message: 'Venda não encontrada' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const venda = new Venda()
      venda.clienteId = request.input('cliente_id')
      venda.produtoId = request.input('produto_id')
      venda.quantidade = request.input('quantidade')
      venda.precoUnitario = request.input('preco_unitario')
      venda.precoTotal = request.input('preco_total')
      venda.dataHora = request.input('data_hora')
      await venda.save()

      return venda
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao cadastrar venda', error: error.message })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const venda = await Venda.findOrFail(params.id)
      venda.quantidade = request.input('quantidade')
      venda.precoUnitario = request.input('preco_unitario')
      venda.precoTotal = request.input('preco_total')
      await venda.save()

      return venda
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao atualizar venda', error: error.message })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const venda = await Venda.findOrFail(params.id)
      await venda.delete()

      return response.json({ message: 'Venda excluída com sucesso' })
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao excluir venda', error: error.message })
    }
  }
}
