const request = require('request')

const forecast = (latitude, longitude, callback) => { 

    const url = 'http://api.weatherstack.com/current?access_key=6569750d205836c7d0ac339828606a89&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, {body }) => {
        //const {error, current.weather_descriptions[0], current.feelslike} = response.body
        if (error){
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location. Please try again.', undefined)
        } else {
            if (body.current.is_day == 'yes'){
                dayOrNight = " and it's a day time"
            } else {
                dayOrNight = " and it's a night time"
            }
            callback(undefined, 'It is currently ' + body.current.weather_descriptions[0] + '. It feels like ' + body.current.feelslike + ' degress outside.\n The current humidity is '  + body.current.humidity
            + '%' + dayOrNight)
    
        }
    })
}

module.exports = forecast
