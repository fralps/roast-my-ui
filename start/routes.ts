import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const HomeController = () => import('#controllers/home_controller')
const SessionsController = () => import('#controllers/sessions_controller')
const RegistrationsController = () => import('#controllers/registrations_controller')
const ProposalsController = () => import('#controllers/proposals_controller')
const ProposalReviewsController = () => import('#controllers/reviews_controller')
const ReviewsController = () => import('#controllers/roaster/reviews_controller')
const RoasteeProposalsController = () => import('#controllers/roastee/proposals_controller')

router.get('/', [HomeController, 'index'])

router
  .group(() => {
    router.resource('sessions', SessionsController).only(['create', 'store'])
    router.delete('sessions', [SessionsController, 'destroy'])
    router.resource('registrations', RegistrationsController).only(['create', 'store'])
  })
  .prefix('auth')

router
  .group(() => {
    router.resource('proposals', ProposalsController).only(['index', 'show'])
    router.resource('proposals.reviews', ReviewsController).only(['create', 'store', 'destroy'])
    router.resource('reviews', ReviewsController).only(['index'])
  })
  .use(middleware.auth({ guards: ['roaster'] }))

router
  .group(() => {
    router.resource('proposals.reviews', ProposalReviewsController).only(['show'])
  })
  .use(middleware.auth({ guards: ['roaster', 'roastee'] }))

router
  .group(() => {
    router
      .resource('/roastee/proposals', RoasteeProposalsController)
      .only(['index', 'create', 'store', 'show', 'destroy'])
  })
  .use(middleware.auth({ guards: ['roastee'] }))
