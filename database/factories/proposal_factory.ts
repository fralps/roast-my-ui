import factory from '@adonisjs/lucid/factories'
import Proposal from '#models/proposal'
import { ReviewFactory } from '#database/factories/review_factory'

export const ProposalFactory = factory
  .define(Proposal, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      websiteUrl: faker.internet.url(),
      screenshots: faker.image.avatar(),
      roastLimit: faker.number.int({ max: 20 }),
    }
  })
  .relation('reviews', () => ReviewFactory)
  .build()
