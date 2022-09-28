import {check} from 'express-validator'
import {validateResult} from '../helpers/dataValidator'
import Shop from "../models/Shop"

const validateCreate = [
    check('shop')
    .exists()
    .custom(async idShop => {
        let shopCheck = await Shop.findById(idShop);
        if (shopCheck == null) {
            throw new Error("This Shop ID doesn't exists")
        }
        return true
    }),

    (req, res, next) =>{
        validateResult(req, res, next)
    }
]

module.exports = {validateCreate}

