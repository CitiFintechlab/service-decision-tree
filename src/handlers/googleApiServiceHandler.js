'use strict';


var request = require('request');
const settings = require('../config/settings');

let googleApiServiceHandler = {


    placeGeocode: function (address, cb) {
        request({
            url: settings.googleApiService + "/placeGeocode",
            method: 'GET',
            qs: {
                address: address
            }
        }, function (error, response, body) {
            if (error) log.error("Address validation service failed -  " + error);
            if (response) log.info("address validation successful and response status message is - " + response.statusMessage);
            cb(response, error);
        });
    }
}
module.exports = googleApiServiceHandler;