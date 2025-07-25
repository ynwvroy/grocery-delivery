import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
import Product from './Product'

export default class OrderItem extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public orderId: number

  @column()
  public productId: number

  @column()
  public quantity: number

  @column()
  public priceAtPurchase: number

  @belongsTo(() => Order)
  public order: BelongsTo<typeof Order>

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>
}