'use strict';


let getUserService = function () {
    if (process.env.NODE_ENV === 'PRODUCTION') {
        return `https://service-user.cfapps.io/v1/user`;
    } else {
        return `http://localhost:3001/v1/user`;
    }
}


let settings = {
    userService: getUserService(),
    citiBikeService: `http://service-citibike.cfapps.io/v1`,
    port: process.env.PORT || '3002'
}

module.exports = settings;