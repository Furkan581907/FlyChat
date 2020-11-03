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
const _ = require('lodash');
function Messages(){
    this.client = redisClient.getClient;
}

module.exports = new Messages();

Messages.prototype.upsert = function ({roomId,message,userId,username,surname}) {
  this.client.hset(
      'messages:'+roomId,
      shortId.generate(),
      JSON.stringify({
          userId,
          username,
          surname,
          message,
          when:Date.now()
      }),
      err =>{
          if(err)
              console.log(err);
      }
  )
};
Messages.prototype.list = function (roomId,callback){
    let messageList = [];
    this.client.hgetall('messages:'+roomId,function (err,messages) {
        if(err) {
            console.log(err);
            return callback([]);
        }
        for(let message in messages)
        {
            messageList.push(JSON.parse(messages[message]))
        }
        return callback(_.orderBy(messageList,'when','asc'))

    })
}