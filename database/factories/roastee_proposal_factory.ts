import factory from '@adonisjs/lucid/factories'
import RoasteeProposal from '#models/roastee_proposal'

export const RoasteeProposalFactory = factory
  .define(RoasteeProposal, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      websiteUrl: faker.internet.url(),
      screenshots: faker.image.avatar(),
      roastLimit: faker.number.int({ max: 20 }),
    }
  })
  .build()
