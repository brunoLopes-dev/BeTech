import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    try {
      const email = request.input('email')
      const password = request.input('password')

      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '10 days',
      })

      return token.toJSON()
    } catch (error) {
      console.log(error)
      return response.status(401).json({ message: 'Credenciais inválidas' })
    }
  }

  public async signup({ request, response }: HttpContextContract) {
    try {
      const { name, email, password } = request.only(['name', 'email', 'password'])

      // Verificar se o e-mail é único
      const existingUser = await User.findBy('email', email)
      if (existingUser) {
        return response.status(400).json({ message: 'E-mail já cadastrado' })
      }

      if (password.length < 8) {
        return response.status(400).json({ message: 'A senha deve ter no mínimo 8 caracteres' })
      }

      const usuario = await User.create({ name, email, password })

      return response.status(201).json({ message: 'Usuário cadastrado com sucesso', usuario })
    } catch (error) {
      return response
        .status(400)
        .json({ message: 'Erro ao cadastrar usuário', error: error.message })
    }
  }
}
