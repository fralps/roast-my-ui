import type { HttpContext } from '@adonisjs/core/http'
import Roastee from '#models/roastee'

export default class ProposalsController {
  async index({ request, auth, inertia }: HttpContext) {
    const page = request.input('page', 1)
    const currentUser = await Roastee.findOrFail(auth.user!.id)

    const proposals = await currentUser
      .related('proposals')
      .query()
      .orderBy('created_at', 'desc')
      .paginate(page, 10)

    return inertia.render('roastee/proposals/index', { proposals, user: currentUser.serialize() })
  }
}
