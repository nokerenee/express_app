// Exercise 1:

const express = require("express"); // import the express package

// Created an array to store Express app instances and port numbers
const apps = [];
const ports = [3000, 3001, 3002];

const testRoutes = require("./routes/myTestRoutes");

// import all calculator routes
const calculatorRoutes = require("./routes/calculatorRoutes");

// import all user routes
const userRoutes = require("./routes/userRoutes");

const friendRoutes = require("./routes/friendRoutes");

// Created Express app instances and defined routes in a loop
for (let i = 0; i < ports.length; i++) {
  const app = express(); // create a new app
  apps.push(app);

  const swaggerUi = require("swagger-ui-express");
  swaggerDocument = require("./swagger.json");
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
  app.use(express.json());

  app.use("/", express.static("public"));

  // app.get("/test", (req, res) => {
  //   res.send(`Hello World from App ${i + 1}!`);
  // });

  app.use("/mytest", testRoutes);

  // map the calculator routes to our app
  app.use("/calculator", calculatorRoutes);

  // map the user routes to our app
  app.use("/users", userRoutes);

  app.use("/friends", friendRoutes);

  // starts the backend app on the given port
  const port = ports[i];
  app.listen(port, () => {
    console.log(`App ${i + 1} listening at http://localhost:${port}`);
  });
}
