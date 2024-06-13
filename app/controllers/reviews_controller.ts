import type { HttpContext } from '@adonisjs/core/http'
import Proposal from '#models/proposal'

export default class ProposalsController {
  async show({ inertia, params }: HttpContext) {
    const proposal: Proposal = await Proposal.findByOrFail('id', params.proposal_id)
    const review = await proposal.related('reviews').query().where('id', params.id).firstOrFail()
    await review.load('screenshots')

    return inertia.render('reviews/show', { review })
  }
}
