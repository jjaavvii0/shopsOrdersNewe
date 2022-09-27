import {validationResult} from 'express-validator'

const validateResult = (req,res,next) =>{
    try{
        validationResult(req).throw()
        return next()
    }catch(e){
        res.status(403)
        res.send({errors: e.array()})
    }
}

module.exports = {validateResult}