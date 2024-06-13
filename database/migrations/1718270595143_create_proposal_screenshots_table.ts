import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'proposal_screenshots'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('file_path').notNullable()
      table.string('file_name').notNullable()
      table.string('extname').notNullable()
      table.string('type').notNullable()
      table.string('size').notNullable()
      table
        .integer('proposal_id')
        .unsigned()
        .references('id')
        .inTable('proposals')
        .onDelete('CASCADE')
        .nullable()

      table
        .integer('review_id')
        .unsigned()
        .references('id')
        .inTable('reviews')
        .onDelete('CASCADE')
        .nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
