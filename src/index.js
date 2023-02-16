require("dotenv").config();
const productRoutes = require("./routes/product.routes");
const swagger = require('./utils/swagger');

require("./utils/mongoose");

const fastify = require("fastify")({
  logger: true,
});

fastify.register(require('@fastify/swagger'), swagger.options);
console.log(swagger.options);
fastify.get("/", (req, res) => {
  res.send({ hello: "world!" });
});

productRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  await fastify.listen({port: 3000});
  fastify.log.info(`server listening on port ${fastify.server.address().port}`);
};

start();
