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

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

//models
const User = require('../models/users');

passport.use(
        new GoogleStrategy({
        clientID:process.env.GOOGLE_LOGIN_CLIENT_ID,
        clientSecret:process.env.GOOGLE_LOGIN_SECRET_KEY,
        callbackURL: process.env.GOOGLE_LOGIN_CALLBACK_URL
    },((accessToken,refreshToken,profile,done)=>{
    const data = profile._json;
    console.log(data);
    User.findOrCreate({
        'googleId':data.sub
    },{
        name:data.given_name,
        surname:data.family_name,
        profilePhotoUrl:data.picture
    },(err,user)=>{
        return done(err,user)
    })
    })
        ));

passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((user,done)=>{
    done(null,user);
});

module.exports=passport;