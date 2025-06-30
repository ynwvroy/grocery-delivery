import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'
import { DateTime } from 'luxon'

export default class ProductSeeder extends BaseSeeder {
  public async run () {
    await Product.createMany([
      {
        name: 'Whole Milk',
        description: 'Fresh whole milk 1L',
        price: 120,
        categoryId: 1,
        imageUrl: 'https://example.com/milk.jpg',
        stockQuantity: 50,
        expiryDate: DateTime.fromJSDate(new Date('2025-07-20')),
      },
      {
        name: 'Apples',
        description: 'Red delicious apples (1kg)',
        price: 200,
        categoryId: 2,
        imageUrl: 'https://example.com/apples.jpg',
        stockQuantity: 100,
        expiryDate: DateTime.fromJSDate(new Date('2025-07-20')),
      }
    ])
  }
}