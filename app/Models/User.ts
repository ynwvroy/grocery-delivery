import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
import Subscription from './Subscription'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fullName: string

  @column()
  public email: string

  @column()
  public passwordHash: string

  @column()
  public phoneNumber: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @hasMany(() => Order)
  public orders: HasMany<typeof Order>

  @hasMany(() => Subscription)
  public subscriptions: HasMany<typeof Subscription>
}