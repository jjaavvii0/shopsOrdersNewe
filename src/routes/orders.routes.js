import {Router} from "express"
const router = Router()

import * as ordersCtrl from "../controllers/orders.controller"
import {validateCreate} from "../middlewares/ordersValidator"

router.post("/", validateCreate, ordersCtrl.createOrder)
router.get("/", ordersCtrl.getOrders)
router.get("/:idOrder", ordersCtrl.getOrderById)
router.put("/:idOrder", ordersCtrl.updateOrderById)
router.delete("/:idOrder", ordersCtrl.deleteOrderById)



export default router;