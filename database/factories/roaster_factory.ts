import factory from '@adonisjs/lucid/factories'
import Roaster from '#models/roaster'

export const RoasterFactory = factory
  .define(Roaster, async ({ faker }) => {
    return {
      email: faker.internet.email(),
      password: 'password',
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      description: faker.lorem.paragraph(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
    }
  })
  .build()
