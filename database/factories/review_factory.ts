import factory from '@adonisjs/lucid/factories'
import { RoasterFactory } from '#database/factories/roaster_factory'
import Review from '#models/review'

export const ReviewFactory = factory
  .define(Review, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
    }
  })
  .relation('roaster', () => RoasterFactory)
  .build()
