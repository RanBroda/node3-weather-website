const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=173af44d78eb12624264377ed7c85ba7&query=' + encodeURIComponent(address) + ''

    request({ url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to location service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].name
            })
        }
    })
}

module.exports = geocode