import {Router} from "express"
const router = Router()

import * as ordersCtrl from "../controllers/orders.controller"


router.post("/", ordersCtrl.placeHolder)
router.get("/", ordersCtrl.placeHolder)
router.get("/:idOrder", ordersCtrl.placeHolder)
router.put("/:idOrder", ordersCtrl.placeHolder)
router.delete("/:idOrder", ordersCtrl.placeHolder)



export default router;