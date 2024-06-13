import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'
import { createProposalValidator, screenshotsValidator } from '#validators/proposal_validator'
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

    // Create proposal screenshots and associate them with the proposal
    const { screenshots } = await request.validateUsing(screenshotsValidator)

    for (let screenshot of screenshots) {
      await screenshot.move(app.makePath('uploads'), {
        name: `${cuid()}.${screenshot.extname}`,
      })
    }
    const proposalScreenshots: any = []
    screenshots.map((screenshot) =>
      proposalScreenshots.push({
        filePath: screenshot.fileName,
        fileName: screenshot.fileName,
        extname: screenshot.extname,
        type: screenshot.type,
        size: screenshot.size,
        proposalId: proposal.id,
      })
    )

    await proposal.related('proposalScreenshots').createMany(proposalScreenshots)

    return response.redirect().toRoute('roastee_proposals.show', { id: proposal.id })
  }

  async show({ params, inertia }: HttpContext) {
    const proposal: Proposal = await Proposal.findOrFail(params.id)
    await proposal.load('proposalScreenshots')
    return inertia.render('roastee/proposals/show', { proposal })
  }

  async destroy({ params, response }: HttpContext) {
    const proposal: Proposal = await Proposal.findOrFail(params.id)

    if (proposal) {
      await proposal.delete()
      response.redirect().toRoute('roastee_proposals.index')
    }
  }
}
