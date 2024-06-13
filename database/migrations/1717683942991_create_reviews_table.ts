import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'reviews'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('roaster_id')
        .unsigned()
        .references('roasters.id')
        .onDelete('CASCADE')
        .nullable()
      table
        .integer('proposal_id')
        .unsigned()
        .references('proposals.id')
        .onDelete('CASCADE')
        .notNullable()

      table.string('title').notNullable()
      table.text('description').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
