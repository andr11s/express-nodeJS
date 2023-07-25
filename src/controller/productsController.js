
const products = [];
const ProductsService = require("../../services/productService");
const services = new ProductsService();

getProducts = (request, response) => {
  let query = {};

  let querys = request.query;
  query = {...querys};

  console.log(query);
  const products = services.find();
  response.json(products)
}

getProductId = (request, response) => {
  const {id} = request.params;
  const product = services.findId(Number(id))
  response.json(product);
}

saveProduct = (request, response)=>{
  const body = request.body;
  services.create(body);
  response.json({status: 200, message: "Se guardo satisfactoriamente"})
}

update = (request, response)=>{
  const {id} = request.params;

  const product = products.find(product => product.id === Number(id));
  if(!product){
    response.status(404).json({
      status: 400,
      message: "No se encontro el producto"
    })
  }

  response.status(200).json({ status: 200, message: "Se actualizado satisfactoriamente" })
}

module.exports ={
  getProducts,
  getProductId,
  saveProduct,
  update
}
