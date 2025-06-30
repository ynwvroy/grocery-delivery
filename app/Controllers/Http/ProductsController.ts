// ProductsController
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import Category from 'App/Models/Category'

export default class ProductsController {
  // GET /products
  public async index({}: HttpContextContract) {
    return Product.query().preload('category')
  }

  // GET /products/:id
  public async show({ params, response }: HttpContextContract) {
    const product = await Product.query().where('id', params.id).preload('category').first()
    if (!product) {
      return response.notFound({ message: 'Product not found' })
    }
    return product
  }

  // POST /products
  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'description', 'categoryId', 'imageUrl', 'price'])
    try {
      const product = await Product.create(data)
      return response.created(product)
    } catch (error) {
      return response.badRequest({ message: 'Could not create product', error })
    }
  }

  // PUT /products/:id
  public async update({ params, request, response }: HttpContextContract) {
    const product = await Product.find(params.id)
    if (!product) {
      return response.notFound({ message: 'Product not found' })
    }
    const data = request.only(['name', 'description', 'categoryId', 'imageUrl', 'price'])
    product.merge(data)
    await product.save()
    return product
  }

  // DELETE /products/:id
  public async destroy({ params, response }: HttpContextContract) {
    const product = await Product.find(params.id)
    if (!product) {
      return response.notFound({ message: 'Product not found' })
    }
    await product.delete()
    return response.ok({ message: 'Product deleted successfully' })
  }
}

// Routes (start/routes.ts)
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'ProductsController.index')
  Route.get('/:id', 'ProductsController.show')
  Route.post('/', 'ProductsController.store')
  Route.put('/:id', 'ProductsController.update')
  Route.delete('/:id', 'ProductsController.destroy')
}).prefix('/products')