import {Router} from "express"
const router = Router()

import * as shopsCtrl from "../controllers/shops.controller"


router.get("/", shopsCtrl.placeHolder)


export default router;