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

/* GET home page. */
router.get('/', (req, res, next) => {
  if(!req.user)
    res.render('index', { title: 'Express' });
  else
    res.redirect('/chat');
});

router.get('/getUser', (req, res, next) => {
  res.json(req.user);
});


module.exports = router;
