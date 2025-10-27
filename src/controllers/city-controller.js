const { StatusCodes } = require('http-status-codes');
const {CityService}  =  require('../services');
const { response } = require('express');
const {ErrorResponse, SuccessResponse} = require('../utils/common')

// POST : /cities
async function createCity(req,res){
    try {
        console.log(req.body)
        const city = await CityService.createCity({
            name: req.body.name
        });
        console.log("inside city Controller")
        SuccessResponse.data=city
        return res.status(StatusCodes.CREATED)
        .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        // console.log(ErrorResponse)
        // console.log("errors coming")
        // console.log(error)
        return res.status(error.statusCode)
        .json(ErrorResponse)
    }
}


module.exports = {
    createCity
}