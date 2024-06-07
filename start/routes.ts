import router from '@adonisjs/core/services/router'

const HomeController = () => import('#controllers/api/v1/home_controller')
const SessionsController = () => import('#controllers/sessions_controller')
const ProposalsController = () => import('#controllers/api/v1/proposals_controller')

router.get('/', [HomeController, 'index'])

router
  .group(() => {
    router.resource('sessions', SessionsController).only(['create', 'store'])
  })
  .prefix('auth')

router.resource('/proposals', ProposalsController).only(['index'])
