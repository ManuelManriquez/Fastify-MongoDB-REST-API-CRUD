const Product = require("../models/product.model");

const getProducts = async (req, reply) => {
  const products = await Product.find();
  return products;
};

const getProduct = async (req, reply) => {
  const product = await Product.findById(req.params.id);
  return reply.code(200).send(product);
};

const postProduct = async (req, reply) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  return reply.code(201).send(newProduct);
};

const deleteProduct = async (req, reply) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  return reply.code(202).send(product);
};

const putProduct = async (req, reply) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
  return reply.code(201).send(product);
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  deleteProduct,
  putProduct,
};