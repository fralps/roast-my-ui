import app from '@adonisjs/core/services/app'
import { type HttpContext } from '@adonisjs/core/http'
import { cuid } from '@adonisjs/core/helpers'
import {
  createRoasterValidator,
  createRoasteeValidator,
  avatarValidator,
} from '#validators/user_validator'
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
      const { avatar } = await request.validateUsing(avatarValidator)

      await avatar.move(app.makePath('uploads'), {
        name: `${cuid()}.${avatar.extname}`,
      })

      await Roaster.create({ ...payload, avatar: avatar.fileName })
      response.redirect().toRoute('sessions.create')
    } else {
      const payload = await createRoasteeValidator.validate(data)
      const { avatar } = await request.validateUsing(avatarValidator)

      await avatar.move(app.makePath('uploads'), {
        name: `${cuid()}.${avatar.extname}`,
      })
      await Roastee.create({ ...payload, avatar: avatar.fileName })
      response.redirect().toRoute('sessions.create')
    }
  }
}
