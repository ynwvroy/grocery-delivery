import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('full_name', 100).notNullable()
      table.string('email', 100).notNullable().unique()
      table.text('password_hash').notNullable()
      table.string('phone_number', 20)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}