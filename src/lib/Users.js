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
function Users(){
    this.client = redisClient.getClient;
}

module.exports = new Users();

Users.prototype.upsert = function (connectionId,meta) {
  this.client.hset(
      'online',
      meta.googleId,
      JSON.stringify({
          connectionId,
          meta,
          when:Date.now()
      }),
      err =>{
          if(err)
              console.log(err);
      }
  )
};
Users.prototype.remove = function (googleId) {
    this.client.hdel(
        'online',
        googleId,
        err =>{
            if(err)
                console.log(err);
        }
    )
};
Users.prototype.list = function (callback){
    let active = [];
    this.client.hgetall('online',function (err,users) {
        if(err) {
            console.log(err);
            return callback([]);
        }
        for(let user in users)
        {
            active.push(JSON.parse(users[user]))
        }
        return callback(active)

    })
}
