import type { HttpContext } from '@adonisjs/core/http'
import { createProposalValidator } from '#validators/proposal_validator'
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

  async create({ inertia }: HttpContext) {
    return inertia.render('roastee/proposals/create')
  }

  async store({ request, auth, inertia }: HttpContext) {
    const data = request.all()
    const currentUser = await Roastee.findOrFail(auth.user!.id)
    const payload = await createProposalValidator.validate(data)

    const proposal = await Roastee.create(payload)
    await proposal.merge({ roasteeId: currentUser.id })

    return inertia.render('roastee/proposals/show', { proposal, user: currentUser.serialize() })
  }
}
