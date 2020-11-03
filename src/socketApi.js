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

const socketio = require('socket.io');
const socketAuthorization = require('../middleware/socketAuthorization');
const io = socketio();

const socketApi = {io};

//libs
const users = require('../src/lib/Users');
const rooms = require('../src/lib/Rooms');


// socket authorization middleware
io.use(socketAuthorization);


/**
 * RedisAdapter
 */
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({host:process.env.REDIS_URI,port:process.env.REDIS_PORT}));

io.on('connection',socket => {
    console.log('user logged in with name = '+ socket.request.user.name);
    users.upsert(socket.id,socket.request.user);

    users.list(users =>{
        io.emit('onlineList',users);
    })

    rooms.list(room =>{
        console.log(room)
    })
    
    socket.on('newRoom',roomName => {
        rooms.upsert(roomName);
    })
    socket.on('disconnect', () => {
        users.remove(socket.request.user.googleId)
        users.list(users =>{
            io.emit('onlineList',users);
        })
    })
});

module.exports = socketApi;