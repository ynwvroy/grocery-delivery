import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductInventory extends BaseSchema {
  protected tableName = 'product_inventory'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('quantity').notNullable()
      table.date('expiry_date').notNullable()
      table.string('batch_code', 50)
      table.timestamp('last_updated', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}