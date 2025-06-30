import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
import ProductInventory from './ProductInventory'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public categoryId: number

  @column()
  public imageUrl: string

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @hasMany(() => ProductInventory)
  public inventory: HasMany<typeof ProductInventory>
}