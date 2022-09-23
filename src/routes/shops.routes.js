import {Router} from "express"
const router = Router()

import * as shopsCtrl from "../controllers/shops.controller"


router.post("/", shopsCtrl.createShop)
router.get("/", shopsCtrl.getShops)
router.get("/:idShop", shopsCtrl.getShopById)
router.put("/:idShop", shopsCtrl.updateShopById)
router.delete("/:idShop", shopsCtrl.deleteShopById)



export default router;