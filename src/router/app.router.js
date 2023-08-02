const userRouter = require('../router/userRouter')
const productsRouter = require('../router/productsRouter')
const authRouter = require('../router/authRouter')

function rotuerApi (app) {
  // const router = express.Router()
  // app.use("/api/v1", router);
  app.use('/users', userRouter)
  app.use('/products', productsRouter)
  app.use('/auth', authRouter)
}

module.exports = rotuerApi
