exports.options = {
    routePrefix: "/documentation",
    exposeRoute: true,
    swagger: {
        info: {
            title: "Documentation",
            version: "1.0.0",
            description: "Documentation for fastify course",
        },
        externalDocs: {
            url: "https://swagger.io",
            description: "Find more info here",
        }
    },
    host: "localhost:3000",
    schemas: ["http"],
    consumes: ["aplication/json"],
    produces: ["aplication/json"]
}