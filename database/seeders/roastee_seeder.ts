import { RoasteeFactory } from '#database/factories/roastee_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await RoasteeFactory.with('roastee_proposals', 10).create()
  }
}
