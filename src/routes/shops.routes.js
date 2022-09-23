import {Router} from "express"
const router = Router()

import * as shopsCtrl from "../controllers/shops.controller"


router.post("/", shopsCtrl.placeHolder)
router.get("/", shopsCtrl.placeHolder)
router.get("/:idShop", shopsCtrl.placeHolder)
router.put("/:idShop", shopsCtrl.placeHolder)
router.delete("/:idShop", shopsCtrl.placeHolder)



export default router;