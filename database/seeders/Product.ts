import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        name: 'Milk',
        description: 'Fresh whole milk',
        categoryId: 1,
        imageUrl: 'https://example.com/milk.jpg',
        price: 120,
        createdAt: DateTime.now(),
      },
      {
        name: 'Orange Juice',
        description: '100% pure orange juice',
        categoryId: 2,
        imageUrl: 'https://example.com/oj.jpg',
        price: 150,
        createdAt: DateTime.now(),
      },
    ])
  }
}