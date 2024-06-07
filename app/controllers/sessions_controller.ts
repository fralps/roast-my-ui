import { type HttpContext } from '@adonisjs/core/http'
import Roaster from '#models/roaster'
import Roastee from '#models/roastee'

export default class SessionsController {
  async create({ inertia }: HttpContext) {
    return inertia.render('login')
  }

  async store({ request, response, auth }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const roaster = await Roaster.findBy('email', email)
    const roastee = await Roastee.findBy('email', email)

    console.log('ROASTER', roaster)
    console.log('ROASTEE', roastee)

    if (!roaster && !roastee) {
      return response.redirect().toRoute('sessions.create')
    }

    if (roaster) {
      const roasterAuth = await Roaster.verifyCredentials(email, password)
      console.log('IF Roaster')
      await auth.use('roaster').login(roasterAuth)
      return response.redirect().toRoute('proposals.index')
    }

    if (roastee) {
      console.log('IF Roastee')
      const roasteeAuth = await Roastee.verifyCredentials(email, password)
      await auth.use('roastee').login(roasteeAuth)
      return response.redirect().toRoute('roastee_proposals.index')
    }
  }
}
