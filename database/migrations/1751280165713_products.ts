import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100).notNullable()
      table.text('description')
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE')
      table.text('image_url')
      table.decimal('price', 10, 2).notNullable()
      table.integer('stock_quantity').notNullable().defaultTo(0)
      table.date('expiry_date').nullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}