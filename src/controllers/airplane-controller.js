const { StatusCodes } = require('http-status-codes');
const {AirplaneService}  =  require('../services');
const { response } = require('express');

async function createAirplane(req,res){
    try {
        console.log(req.body)
        console.log("inside airplane Controller")
        const Airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res.status(StatusCodes.CREATED)
        .json({
            success: true,
            message: 'Successfully create an airplane',
            data: response,
            error: {}
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success: false,
            message: "Something went while creating airplane ",
            data: {},
            error: error
        })
    }
}

module.exports = {
    createAirplane
}