
const express=require('express');

var router=express.Router();

router.get('/', function(req, res) {
    res.send('all zoos');
});





module.exports = router