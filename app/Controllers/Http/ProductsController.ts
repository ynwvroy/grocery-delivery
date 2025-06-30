import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  // GET /products
  public async index() {
    return await Product.query().preload('category')
  }

  // GET /products/:id
  public async show({ params, response }: HttpContextContract) {
    const product = await Product.find(params.id)

    if (!product) {
      return response.status(404).json({ message: 'Product not found' })
    }

    await product.load('category')
    return product
  }

  // POST /products
  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'name',
      'description',
      'price',
      'imageUrl',        // corrected from 'image_url'
      'categoryId',      // corrected from 'category_id'
      'stockQuantity',   // corrected from 'stock_quantity'
      'expiryDate'       // corrected from 'expiry_date'
    ])

    const product = await Product.create(data)
    return response.status(201).json(product)
  }

  // PUT /products/:id
  public async update({ params, request, response }: HttpContextContract) {
    const product = await Product.find(params.id)

    if (!product) {
      return response.status(404).json({ message: 'Product not found' })
    }

    const data = request.only([
      'name',
      'description',
      'price',
      'imageUrl',
      'categoryId',
      'stockQuantity',
      'expiryDate'
    ])

    product.merge(data)
    await product.save()

    return response.status(200).json(product)
  }

  // DELETE /products/:id
  public async destroy({ params, response }: HttpContextContract) {
    const product = await Product.find(params.id)

    if (!product) {
      return response.status(404).json({ message: 'Product not found' })
    }

    await product.delete()
    return response.status(200).json({ message: 'Product deleted' })
  }
}