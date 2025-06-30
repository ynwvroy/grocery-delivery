import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public label: string

  @column()
  public street: string

  @column()
  public city: string

  @column()
  public region: string

  @column()
  public postalCode: string

  @column()
  public isDefault: boolean

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}