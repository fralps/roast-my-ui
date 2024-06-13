import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'
import { createReviewValidator } from '#validators/review_validator'
import { screenshotsValidator } from '#validators/screenshot_validator'
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

    const review: Review = await new Review().fill(payload)
    await review.merge({ roasterId: currentUser.id, proposalId: proposalId }).save()

    // Create proposal screenshots and associate them with the proposal
    const { screenshots } = await request.validateUsing(screenshotsValidator)

    for (let screenshot of screenshots) {
      await screenshot.move(app.makePath('uploads'), {
        name: `${cuid()}.${screenshot.extname}`,
      })
    }
    const reviewScreenshots: any = []
    screenshots.map((screenshot) =>
      reviewScreenshots.push({
        filePath: screenshot.fileName,
        fileName: screenshot.fileName,
        extname: screenshot.extname,
        type: screenshot.type,
        size: screenshot.size,
        reviewId: review.id,
      })
    )

    await review.related('screenshots').createMany(reviewScreenshots)

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
