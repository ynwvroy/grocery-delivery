import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Product from './Product'

export default class Subscription extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public productId: number

  @column()
  public quantity: number

  @column()
  public interval: 'weekly' | 'bi-weekly' | 'monthly'

  @column.date()
  public nextDeliveryDate: Date

  @column()
  public isActive: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>
}