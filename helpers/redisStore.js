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

const session = require('express-session');
const redis = require('redis')
const client = redis.createClient(process.env.REDIS_PORT,process.env.REDIS_URI,{auth_pass:process.env.REDIS_PASS});
const redisStore = require('connect-redis')(session);

module.exports = new redisStore({
    client:client
});
