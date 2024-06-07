import type { HttpContext } from '@adonisjs/core/http'
import Proposal from '#models/proposal'

export default class ProposalsController {
  async index({ inertia }: HttpContext) {
    const proposals = await Proposal.query().orderBy('created_at', 'desc').paginate(1, 10)
    return inertia.render('proposals', { proposals })
  }
}
