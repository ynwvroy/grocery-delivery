import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Order from './Order'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public orderId: number

  @column()
  public paymentMethod: string

  @column()
  public amount: number

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public paidAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Order)
  public order: BelongsTo<typeof Order>
}