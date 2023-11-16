// ClienteController.ts
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import Venda from 'App/Models/Venda'

export default class ClienteController {
  public async index({}: HttpContextContract) {
    try {
      const clientes = await Cliente.query().select('id', 'nome', 'cpf').orderBy('id', 'asc')
      return clientes
    } catch (error) {
      return { error: 'Erro ao buscar clientes', message: error.message }
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const cliente = await Cliente.findOrFail(params.id)

      const vendas = await Venda.query()
        .where('cliente_id', cliente.id)
        .preload('produto')
        .orderBy('data_hora', 'desc')

      return { cliente, vendas }
    } catch (error) {
      return response.status(404).json({ message: 'Cliente não encontrado' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const { nome, cpf } = request.only(['nome', 'cpf'])

      const existingCliente = await Cliente.findBy('cpf', cpf)
      if (existingCliente) {
        return response.status(400).json({ message: 'CPF já cadastrado' })
      }

      if (cpf.length > 14) {
        return response.status(400).json({ message: 'CPF deve ter no máximo 14 dígitos' })
      }

      const cliente = new Cliente()
      cliente.nome = nome
      cliente.cpf = cpf
      await cliente.save()

      return cliente
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao cadastrar cliente', error: error.message })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const { nome, cpf } = request.only(['nome', 'cpf'])

      const existingCliente = await Cliente.query()
        .where('id', '<>', params.id)
        .where('cpf', cpf)
        .first()
      if (existingCliente) {
        return response.status(400).json({ message: 'CPF já cadastrado' })
      }

      if (cpf.length > 14) {
        return response.status(400).json({ message: 'CPF deve ter no máximo 14 dígitos' })
      }

      const cliente = await Cliente.findOrFail(params.id)
      cliente.nome = nome
      cliente.cpf = cpf
      await cliente.save()

      return cliente
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao atualizar cliente', error: error.message })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const cliente = await Cliente.findOrFail(params.id)

      await Venda.query().where('cliente_id', cliente.id).delete()

      await cliente.delete()

      return response.json({ message: 'Cliente excluído com sucesso' })
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao excluir cliente', error: error.message })
    }
  }
}
