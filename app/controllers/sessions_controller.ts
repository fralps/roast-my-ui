import type { HttpContext } from '@adonisjs/core/http'

export default class SessionsController {
  async store({ response }: HttpContext) {
    return response.redirect().toRoute('proposals.index')
  }
}
