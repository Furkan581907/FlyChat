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

const redisClient = require('../redisClient');
const shortId = require('shortid');
function Rooms(){
    this.client = redisClient.getClient;
}

module.exports = new Rooms();

Rooms.prototype.upsert = function (name) {
    console.log(name);
    const newId = shortId.generate()
  this.client.hset(
      'rooms',
      '@Room:'+newId,
      JSON.stringify({
          id:'@Room:'+newId,
          name,
          when:Date.now()
      }),
      err =>{
          if(err)
              console.log(err);
      }
  )
};

Rooms.prototype.list = function (callback){
    let roomList = [];
    this.client.hgetall('rooms',function (err,rooms) {
        if(err) {
            console.log(err);
            return callback([]);
        }
        for(let room in rooms)
        {
            roomList.push(JSON.parse(rooms[room]))
        }
        return callback(roomList)

    })
}
