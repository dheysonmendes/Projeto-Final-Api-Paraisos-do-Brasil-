const routes = require("express").Router();

const LugarController = require("../controllers/LugaresController");
const LugarMiddleware = require("../middlewares/LugarMiddlewares");

routes.get("/lugares", LugarController.getAll);
routes.get(
  "/lugares/:id",
  LugarMiddleware.validaID,
  LugarController.getById
);
routes.post("/lugares", LugarController.create);
routes.put(
  "/lugares/:id",
  LugarMiddleware.validaID,
  LugarController.update
);
routes.delete(
  "/lugares/:id",
  LugarMiddleware.validaID,
  LugarController.del
);
routes.get("/filterByName", LugarController.filterByName);
routes.get("/filterAll", LugarController.filterAll);

module.exports = routes;
