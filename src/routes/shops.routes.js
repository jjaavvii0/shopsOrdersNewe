import {Router} from "express"
const router = Router()

import * as shopsCtrl from "../controllers/shops.controller"
import {validateCreate} from "../validators/shops"

router.post("/", validateCreate, shopsCtrl.createShop)
router.get("/", shopsCtrl.getShops)
router.get("/:idShop", shopsCtrl.getShopById)
router.put("/:idShop", shopsCtrl.updateShopById)
router.delete("/:idShop", shopsCtrl.deleteShopById)



export default router;