import router from '@adonisjs/core/services/router'

const HomeController = () => import('#controllers/home_controller')
const SessionsController = () => import('#controllers/sessions_controller')
const ProposalsController = () => import('#controllers/proposals_controller')

router.get('/', [HomeController, 'index'])
router.on('/login').renderInertia('login')

router
  .group(() => {
    router.post('/users/login', [SessionsController, 'store'])
  })
  .prefix('auth')

router.resource('/proposals', ProposalsController).only(['index'])
