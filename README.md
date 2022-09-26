# Joi validation Demo (TypeScript + Express)

This is a very simple TypeScript app which shows how, in an Express app, you might use the [Joi validation library](https://joi.dev/api) to validate some user objects and pizza order objects coming from the body of a HTTP POST request.

See :

-   [src/index.ts](src/index.ts)
-   [src/orderSchema.ts](src/orderSchema.ts)
-   [src/userSchema.ts](src/userSchema.ts)

### Postman testing collection included.

Import [this collection file](joi-demo.postman_collection.json) into your Postman to add a simple joi-demo collection.

### Resources

-   [Official joi API docs](https://joi.dev/api)
-   The [joi sandbox / schema tester](https://joi.dev/tester/) makes it easy to experiment with joi schemas.
