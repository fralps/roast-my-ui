import factory from '@adonisjs/lucid/factories'
import { RoasterFactory } from '#database/factories/roaster_factory'
import Review from '#models/review'

export const ReviewFactory = factory
  .define(Review, async ({ faker }) => {
    return {
      description: faker.lorem.paragraph(),
      screenshots: faker.image.url(),
    }
  })
  .relation('roaster', () => RoasterFactory)
  .build()
