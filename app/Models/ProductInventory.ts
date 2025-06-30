import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class ProductInventory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public productId: number

  @column()
  public quantity: number

  @column.date()
  public expiryDate: Date

  @column()
  public batchCode: string

  @column.dateTime({ autoCreate: true })
  public lastUpdated: DateTime

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>
}