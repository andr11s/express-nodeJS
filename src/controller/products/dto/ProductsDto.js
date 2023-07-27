const { z } = require("zod");

const {Products} = require("../../../models/products");

const productoSchema = z.object({
  name: z.string().nonempty("Name is required").default(Products.name),
  description: z.string().nonempty("Description is required").default(Products.description),
  price: z.number({
    required_error: "price is required"
  }).nonnegative().default(Products.price)
})

module.exports ={
  productoSchema
}
