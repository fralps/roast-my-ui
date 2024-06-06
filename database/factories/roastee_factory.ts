import factory from '@adonisjs/lucid/factories'
import { RoasteeProposalFactory } from '#database/factories/roastee_proposal_factory'
import Roastee from '#models/roastee'

export const RoasteeFactory = factory
  .define(Roastee, async ({ faker }) => {
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
  .relation('roastee_proposals', () => RoasteeProposalFactory)
  .build()
