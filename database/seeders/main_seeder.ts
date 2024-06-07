import { RoasteeFactory } from '#database/factories/roastee_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await RoasteeFactory.with('proposals', 50, (proposal) =>
      proposal.with('reviews', 5, (review) => review.with('roaster'))
    ).create()
  }
}
