import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.get('/', 'ProductsController.index')

  // Static route comes first
  Route.get('/categories', 'CategoriesController.index')
  Route.post('/categories', 'CategoriesController.store')

  Route.post('/', 'ProductsController.store')
  Route.put('/:id', 'ProductsController.update')
  Route.delete('/:id', 'ProductsController.destroy')

  // Dynamic route comes last
  Route.get('/:id', 'ProductsController.show')
}).prefix('/products')