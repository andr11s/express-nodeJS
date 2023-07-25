class ProductsService{
  products;

  constructor(){
    this.products = [];
  }

  create(payload){
    const newId = this.products.length + 1;
    const product ={
      id: newId,
      ...payload
    }

    this.products.push(product);
  }

  find(){
    return this.products;
  }

  findId(id){
    const product = products.find(product => product.id === Number(id));
    if(!product)  throw new Error("No se encontro el prodcuto");
    return product;
  }

  update(id, payload){}
  path(id, payload){}
}

module.exports = ProductsService;

