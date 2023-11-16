import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Endereco from 'App/Models/Endereco'

export default class EnderecoController {
  public async index({}: HttpContextContract) {
    try {
      const enderecos = await Endereco.all()
      return enderecos
    } catch (error) {
      return { error: 'Erro ao buscar endereços', message: error.message }
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const endereco = await Endereco.findOrFail(params.id)
      return endereco
    } catch (error) {
      return response.status(404).json({ message: 'Endereço não encontrado' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const endereco = new Endereco()
      endereco.clienteId = request.input('cliente_id')
      endereco.rua = request.input('rua')
      endereco.numero = request.input('numero')
      endereco.cidade = request.input('cidade')
      endereco.estado = request.input('estado')
      endereco.cep = request.input('cep')
      await endereco.save()

      return endereco
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao cadastrar endereço', error: error.message })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const endereco = await Endereco.findOrFail(params.id)
      endereco.rua = request.input('rua')
      endereco.numero = request.input('numero')
      endereco.cidade = request.input('cidade')
      endereco.estado = request.input('estado')
      endereco.cep = request.input('cep')
      await endereco.save()

      return endereco
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao atualizar endereço', error: error.message })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const endereco = await Endereco.findOrFail(params.id)
      await endereco.delete()

      return response.json({ message: 'Endereço excluído com sucesso' })
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao excluir endereço', error: error.message })
    }
  }
}
