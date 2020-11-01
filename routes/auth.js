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

const express = require('express');
const router = express.Router();
const passportGoogle = require('../auth/google');

router.get('/google',passportGoogle.authenticate(
    'google',
    {
        scope:['profile']
    }
));

router.get('/google/callback',
    passportGoogle.authenticate(
    'google',
    {
        failureRedirect:'/'
    }),
    (req,res) =>{
    res.redirect('/chat');
    });

module.exports = router;