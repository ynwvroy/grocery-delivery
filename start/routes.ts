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
  .middleware('auth:api')

  Route.group(() => {
    Route.post('/register', 'AuthController.register')
    Route.post('/login', 'AuthController.login')
  
    Route.group(() => {
      Route.get('/me', 'AuthController.me')
      Route.post('/logout', 'AuthController.logout')
    }).middleware('auth:api')
  }).prefix('/auth')  

  Route.group(() => {
    Route.get('/', 'OrdersController.index') // Optional: protect if it shows user-specific orders
    Route.post('/', 'OrdersController.store')
  }).prefix('/orders').middleware('auth:api')  