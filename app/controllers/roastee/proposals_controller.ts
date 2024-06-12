import type { HttpContext } from '@adonisjs/core/http'
import { createProposalValidator } from '#validators/proposal_validator'
import Roastee from '#models/roastee'
import Proposal from '#models/proposal'

export default class ProposalsController {
  async index({ request, auth, inertia }: HttpContext) {
    const page = request.input('page', 1)
    const currentUser: Roastee = await Roastee.findOrFail(auth.user!.id)

    const proposals = await currentUser
      .related('proposals')
      .query()
      .orderBy('created_at', 'desc')
      .paginate(page, 10)

    return inertia.render('roastee/proposals/index', { proposals, user: currentUser.serialize() })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('roastee/proposals/create')
  }

  async store({ request, auth, response }: HttpContext) {
    const data = request.all()
    const currentUser: Roastee = await Roastee.findOrFail(auth.user!.id)
    const payload = await createProposalValidator.validate(data)

    const proposal: Proposal = await new Proposal().fill(payload)
    await proposal.merge({ roasteeId: currentUser.id }).save()

    return response.redirect().toRoute('roastee_proposals.show', { id: proposal.id })
  }

  async show({ params, inertia }: HttpContext) {
    const proposal: Proposal = await Proposal.findOrFail(params.id)
    return inertia.render('roastee/proposals/show', { proposal })
  }
}
