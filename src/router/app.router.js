const userRouter = require('../router/userRouter')
const productsRouter = require('../router/productsRouter')

function rotuerApi (app) {
  // const router = express.Router()
  // app.use("/api/v1", router);
  app.use('/users', userRouter)
  app.use('/products', productsRouter)
}

module.exports = rotuerApi
