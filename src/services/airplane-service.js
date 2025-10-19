const {AirplaneRepository} = require('../repositories')

const airplRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        console.log("inside airplane-serviec")
        const airplane = await airplRepository.create(data)
        return airplane;
    } catch (error) {
        console.log("error occured in airplane-service")
        throw error;
    }
}

module.exports = {createAirplane}