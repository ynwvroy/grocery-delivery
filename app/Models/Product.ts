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

  @column()
  public stockQuantity: number

  @column.date()
  public expiryDate: DateTime | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @hasMany(() => ProductInventory)
  public inventory: HasMany<typeof ProductInventory>
}