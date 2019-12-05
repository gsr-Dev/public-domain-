const express = require('express'); 
const router = express.Router(); 

router.get('/', function(req, res) {
    res.render('home'); 
}); 

router.get('/resume', function(req, res) {
    res.render('resume');
}); 

router.get('/blog', function(req, res) {
    res.render('blog');
}); 

router.get('/location', function(req, res) {
    res.render('location'); 
}); 

module.exports = router; 