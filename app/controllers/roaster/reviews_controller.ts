import type { HttpContext } from '@adonisjs/core/http'
import { createReviewValidator } from '#validators/review_validator'
import Roaster from '#models/roaster'
import Review from '#models/review'

export default class ReviewsController {
  async index({ request, inertia, auth }: HttpContext) {
    const currentUser: Roaster = await Roaster.findOrFail(auth.user!.id)
    const page = request.input('page', 1)

    const reviews = await currentUser
      .related('reviews')
      .query()
      .orderBy('created_at', 'desc')
      .paginate(page, 10)

    return inertia.render('roaster/reviews/index', { reviews })
  }

  async create({ inertia, params }: HttpContext) {
    return inertia.render('roaster/reviews/create', { proposalId: params.proposal_id })
  }

  async store({ request, response, auth, params }: HttpContext) {
    const currentUser: Roaster = await Roaster.findOrFail(auth.user!.id)
    const proposalId = params.proposal_id
    const data = request.all()

    const payload = await createReviewValidator.validate(data)
    await currentUser.related('reviews').create({ ...payload, proposalId: proposalId })

    response.redirect().toRoute('proposals.show', { id: proposalId })
  }

  async destroy({ response, params }: HttpContext) {
    const reviewId = params.id
    const review = await Review.findOrFail(reviewId)

    if (review) {
      await review.delete()
      response.redirect().toRoute('proposals.show', { id: review.proposalId })
    }
  }
}
