import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import OrderItem from './OrderItem'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public status: string

  @column()
  public totalAmount: number

  @column.dateTime({ autoCreate: true })
  public placedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => OrderItem)
  public items: HasMany<typeof OrderItem>
}