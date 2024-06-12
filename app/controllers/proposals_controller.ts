import type { HttpContext } from '@adonisjs/core/http'
import Proposal from '#models/proposal'

export default class ProposalsController {
  async index({ inertia, request }: HttpContext) {
    const page = request.input('page', 1)
    const proposals = await Proposal.query().orderBy('created_at', 'desc').paginate(page, 10)
    return inertia.render('proposals/index', { proposals })
  }

  async show({ inertia, params }: HttpContext) {
    const proposal: Proposal = await Proposal.findOrFail(params.id)
    await proposal.load('reviews')

    return inertia.render('proposals/show', { proposal })
  }
}
