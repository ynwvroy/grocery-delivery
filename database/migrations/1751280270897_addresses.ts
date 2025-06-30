import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('label', 100)
      table.text('street')
      table.string('city', 50)
      table.string('region', 50)
      table.string('postal_code', 20)
      table.boolean('is_default').defaultTo(false)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}