import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Payments extends BaseSchema {
  protected tableName = 'payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('order_id').unsigned().references('id').inTable('orders')
      table.string('payment_method', 50)
      table.decimal('amount', 10, 2)
      table.string('status', 20)
      table.timestamp('paid_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}