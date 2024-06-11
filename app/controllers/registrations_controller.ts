import { type HttpContext } from '@adonisjs/core/http'
import { createRoasterValidator, createRoasteeValidator } from '#validators/user_validator'
import Roaster from '#models/roaster'
import Roastee from '#models/roastee'

export default class SessionsController {
  async create({ request, inertia }: HttpContext) {
    const userType = request.input('type', 'roastee')

    return inertia.render('registrations/create', { type: userType })
  }

  async store({ request, response }: HttpContext) {
    const data = request.all()
    const type = data.type

    if (type === 'roaster') {
      const payload = await createRoasterValidator.validate(data)
      await Roaster.create(payload)
      response.redirect().toRoute('sessions.create')
    } else {
      const payload = await createRoasteeValidator.validate(data)
      await Roastee.create(payload)
      response.redirect().toRoute('sessions.create')
    }
  }
}
