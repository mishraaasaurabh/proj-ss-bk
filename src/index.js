const express = require("express")

const {ServerConfig,Logger} = require('./config')
const apiRoutes = require('./routes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, async ()=>{
    console.log("Server runnig at port",ServerConfig.PORT)
    Logger.info("Success", {})
    const { City, Airport} = require('./models')
    const bengaluru =  await City.findByPk(5)
    console.log(bengaluru)
    const mumairport = await bengaluru.createAirport({name: 'Hubbli Airport',code: 'HBL'})
    // const airport  = await Airport.create({name: "Prayagraj Airport", code: "PRYJ", cityId: 1})

    // const airportsinbeng = await mumbai.getAirports();
    // console.log(airportsinbeng)f
})

