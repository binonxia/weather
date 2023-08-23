const { fetchWeatherData } = require('./controler')
function route(app) {
    app.get('/weather/:citycode', async (req, res) => {
        try {
            const citycode = req.params.citycode;
            const data = await fetchWeatherData(citycode);
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error)
        }
    })
} 
module.exports = {
    route
}