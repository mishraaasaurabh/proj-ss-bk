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

module.exports = {createAirplane,
    getAirplanes
}