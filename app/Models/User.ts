import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Order from './Order'
import Subscription from './Subscription'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fullName: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string  // 🔁 renamed from `passwordHash`

  @column()
  public phoneNumber: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @hasMany(() => Order)
  public orders: HasMany<typeof Order>

  @hasMany(() => Subscription)
  public subscriptions: HasMany<typeof Subscription>

  // 🔐 Automatically hash password before saving
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}