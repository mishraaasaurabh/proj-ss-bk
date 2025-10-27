const {StatusCodes} = require('http-status-codes')
const {AirplaneRepository} = require('../repositories');
const AppError = require('../utils/error/app-error');

const airplRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airplRepository.create(data)
        return airplane;
    } catch (error) {
        if(error.name =='SequelizeValidationError'){
            let explanation = []
            error.errors.forEach((err)=>(
                explanation.push(err.message)
            ))
            console.log(explanation)
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        // console.log("error occured in airplane-service")
        throw new AppError("Cannot create a new airplane object ", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirplanes(){
    try {
        const airplanes = await airplRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError("cannot fetch data of all the airplanes ", StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

async function getAirplane(data){
    try {
        const airplane = await airplRepository.get(data);
        if(!airplane){
            console.log("empty response in getairplane-service")
        }
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The Airplane you requested is not present", error.statusCode)
        }
        throw new AppError("cannot fetch data of all the airplanes ", StatusCodes.INTERNAL_SERVER_ERROR)
        
    }
}

async function destroyAirplane(data){
    try {
        const airplanes = await airplRepository.destroy(data);
        return airplanes;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The Airplane you requested to delete is not present", error.statusCode)

        }
        throw new AppError("cannot fetch data of all the airplanes ", StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

async function updateAirplane(id,data){
    try {
        const airplanes = await airplRepository.update(id,data);
        return airplanes
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The Airplane you requested to delete is not present", error.statusCode)

        }
        throw new AppError("cannot fetch data of all the airplanes ", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}