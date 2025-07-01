import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const data = request.only(['fullName', 'email', 'password', 'phoneNumber'])

    const user = await User.create(data)
    return response.status(201).json({ message: 'User registered', user })
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const token = await auth.use('api').attempt(email, password)
      return { token }
    } catch {
      return response.unauthorized({ message: 'Invalid credentials' })
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').logout()
    return { message: 'Logged out' }
  }

  public async me({ auth }: HttpContextContract) {
    return auth.user
  }
}