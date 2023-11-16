import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Telefone from 'App/Models/Telefone'
import Cliente from 'App/Models/Cliente'

export default class TelefoneController {
  public async index({}: HttpContextContract) {
    try {
      const telefones = await Telefone.all()
      return telefones
    } catch (error) {
      return { error: 'Erro ao buscar telefones', message: error.message }
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const telefone = await Telefone.findOrFail(params.id)
      return telefone
    } catch (error) {
      return response.status(404).json({ message: 'Telefone não encontrado' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const clienteId = request.input('cliente_id')
      let numero = request.input('numero')

      numero = numero.replace(/[\s()-]/g, '')

      if (!/^\d+$/.test(numero)) {
        return response
          .status(400)
          .json({ message: 'Número de telefone deve conter apenas números' })
      }
      const cliente = await Cliente.findOrFail(clienteId)

      const telefone = new Telefone()
      telefone.clienteId = cliente.id
      telefone.numero = numero
      await telefone.save()

      return telefone
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao cadastrar telefone', error: error.message })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const numero = request.input('numero')

      if (!/^\d+$/.test(numero)) {
        return response
          .status(400)
          .json({ message: 'Número de telefone deve conter apenas números' })
      }

      const telefone = await Telefone.findOrFail(params.id)
      telefone.numero = numero
      await telefone.save()

      return telefone
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao atualizar telefone', error: error.message })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const telefone = await Telefone.findOrFail(params.id)
      await telefone.delete()

      return response.json({ message: 'Telefone excluído com sucesso' })
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao excluir telefone', error: error.message })
    }
  }
}
