/*
 * Copyright (c) Bekir Furkan ZADEGİL
 * ***** Github : Furkan581907 ******
 * ***** İnstagram : Furkann.z ******
 * ***** Web : www.zadegil.com ******
 * ***** mail : zadegil581907@gmail.com ******
 * ***** Bismillahirrahmanirrahim ******
 * Created Date : 2020.
 *
 */

const redis = require('redis');

const getClient = () => {
    return redis.createClient({
        host:process.env.REDIS_URI,
        port:process.env.REDIS_PORT,
    })
}

module.exports.getClient = getClient();