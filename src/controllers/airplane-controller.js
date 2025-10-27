const { StatusCodes } = require('http-status-codes');
const {AirplaneService}  =  require('../services');
const { response } = require('express');
const {ErrorResponse, SuccessResponse} = require('../utils/common')

async function createAirplane(req,res){
    try {
        console.log(req.body)
        const Airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        console.log("inside airplane Controller")
        SuccessResponse.data=Airplane
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

async function getAirplanes(req,res){
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res.
                   status(StatusCodes.OK)
                   .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error=error
        return res.status(error.statusCode)
        .json(ErrorResponse)
    }
}

// /airplanes/:id
async function getAirplane(req,res){
    try {
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res.
                   status(StatusCodes.OK)
                   .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error=error
        console.log("status code of error", error.statusCode)
        return res.status(error.statusCode)
        .json(ErrorResponse)
    }
}

async function destroyAirplane(req,res){
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res.
                   status(StatusCodes.OK)
                   .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error=error
        return res.status(error.statusCode)
        .json(ErrorResponse)
    }
}

async function updateAirplane(req,res){
    try {
        const airplanes = await AirplaneService.updateAirplane(req.params.id, req.body);
        SuccessResponse.data = airplanes;
        return res.
                   status(StatusCodes.OK)
                   .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error=error
        return res.status(error.statusCode)
        .json(ErrorResponse)
    }

}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane, 
    destroyAirplane,updateAirplane
}