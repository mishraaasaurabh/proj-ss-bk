const { StatusCodes  } =  require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/error/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body?.name ){
        ErrorResponse.message="Something went while creating ciy ",
       
        ErrorResponse.error= new AppError("City Number not found in incoming request",StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    next()
}
module.exports = {
    validateCreateRequest
}