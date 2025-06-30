import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Admins extends BaseSchema {
  protected tableName = 'admins'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email', 100).notNullable().unique()
      table.text('password_hash').notNullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}