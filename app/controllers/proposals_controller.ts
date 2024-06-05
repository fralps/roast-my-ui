import type { HttpContext } from '@adonisjs/core/http'

export default class ProposalsController {
  async index({ inertia }: HttpContext) {
    return inertia.render('proposals')
  }
}
