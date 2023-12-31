const products = [];
const ProductsService = require('../../services/productService');
const { productoSchema } = require('./dto/ProductsDto');
const services = new ProductsService();

async function getProducts(request, response, next) {
  let query = {};
  let querys = request.query;
  query = { ...querys };

  try {
    const products = await services.find();
    response.json(products);
  } catch (error) {
    next(error);
  }
}

getProductId = (request, response) => {
  const { id } = request.params;
  const product = services.findId(Number(id));
  response.json(product);
};

saveProduct = (request, response) => {
  const body = request.body;

  productoSchema.parse(request.body);

  services.create(body);
  response.json({ status: 200, message: 'Se guardo satisfactoriamente' });
};

update = (request, response) => {
  const { id } = request.params;

  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    response.status(404).json({
      status: 400,
      message: 'No se encontro el producto',
    });
  }

  response
    .status(200)
    .json({ status: 200, message: 'Se actualizado satisfactoriamente' });
};

module.exports = {
  getProducts,
  getProductId,
  saveProduct,
  update,
};
