import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// Categories routes (standalone)
Route.get('/categories', 'CategoriesController.index')
Route.post('/categories', 'CategoriesController.store')

// Products routes
Route.group(() => {
  Route.get('/', 'ProductsController.index')
  Route.get('/:id', 'ProductsController.show')
  Route.post('/', 'ProductsController.store')
  Route.put('/:id', 'ProductsController.update')
  Route.delete('/:id', 'ProductsController.destroy')
}).prefix('/products')
