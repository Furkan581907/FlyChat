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

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findorcreate = require('mongoose-find-or-create');

const userSchema = new Schema({
    googleId:{
        type:String,
        unique:true
    },
    name:String,
    surname:String,
    profilePhotoUrl:String
});
userSchema.plugin(findorcreate);
module.exports = mongoose.model('users',userSchema);