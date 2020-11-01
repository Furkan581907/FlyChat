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
var express = require('express');
var router = express.Router();

/* GET chathome page. */
router.get('/', function(req, res, next) {
  res.render('chat',{user:req.user});
});

module.exports = router;
