import {check} from 'express-validator'
import {validateResult} from '../helpers/dataValidator'

const validateCreate = [
    check('name')
    .exists()
    .isLength({min: 3})
    .not()
    .isEmpty(),

    check('phone')
    .exists()
    .isNumeric(),

    check('email')
    .exists()
    .isEmail(),

    (req, res, next) =>{
        validateResult(req, res, next)
    }
]

module.exports = {validateCreate}