import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'proposals'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('roastee_id')
        .unsigned()
        .references('roastees.id')
        .onDelete('CASCADE')
        .notNullable() // delete proposals when roastee is deleted

      table.string('title').notNullable()
      table.text('description').notNullable()
      table.string('website_url').notNullable()
      table.string('screenshots').nullable()
      table.integer('roast_limit').nullable().defaultTo(5)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
