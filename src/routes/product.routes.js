const productCtrl = require("../controllers/product.controller.js");

const routes = [
  {
    url: "/products",
    method: "GET",
    handler: productCtrl.getProducts,
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: productCtrl.getProduct,
  },
  {
    url: "/products",
    method: "POST",
    handler: productCtrl.postProduct,
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: productCtrl.deleteProduct,
  },
  {
    url: "/products/:id",
    method: "PUT",
    handler: productCtrl.putProduct,
  }
];


module.exports = routes;
