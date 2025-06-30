import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class CategorySeeder extends BaseSeeder {
  public async run () {
    await Category.updateOrCreateMany('name', [
      { name: 'Dairy' },
      { name: 'Fruits' },
      { name: 'Vegetables' },
      { name: 'Bakery' },
      { name: 'Beverages' },
    ])
  }
}