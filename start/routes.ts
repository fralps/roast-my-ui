import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const HomeController = () => import('#controllers/home_controller')
const SessionsController = () => import('#controllers/sessions_controller')
const ProposalsController = () => import('#controllers/proposals_controller')
const RoasteeProposalsController = () => import('#controllers/roastee/proposals_controller')

router.get('/', [HomeController, 'index'])

router
  .group(() => {
    router.resource('sessions', SessionsController).only(['create', 'store'])
  })
  .prefix('auth')

router
  .group(() => {
    router.resource('proposals', ProposalsController).only(['index'])
  })
  .use(middleware.auth({ guards: ['roaster'] }))

router
  .group(() => {
    router.resource('/roastee/proposals', RoasteeProposalsController).only(['index'])
  })
  .use(middleware.auth({ guards: ['roastee'] }))
