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

//libs
const Messages = require('../src/lib/Messages');

router.get('/list', (req, res, next) => {
   Messages.list(req.query.roomId,messages => {
       res.json(messages);
   });

});

module.exports = router;
