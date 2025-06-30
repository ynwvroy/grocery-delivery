import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Subscriptions extends BaseSchema {
  protected tableName = 'subscriptions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('quantity').defaultTo(1)
      table.enum('interval', ['weekly', 'bi-weekly', 'monthly'])
      table.date('next_delivery_date')
      table.boolean('is_active').defaultTo(true)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}