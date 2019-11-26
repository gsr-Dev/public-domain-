const express = require('express'); 
const router = express.Router(); 

router.get('/', function(req, res) {
    res.render('home'); 
}); 

router.get('/contact', function(req, res) {
    res.render('contact');
}); 

router.get('/blog', function(req, res) {
    res.render('blog');
}); 

router.get('/location', function(req, res) {
    res.render('location'); 
}); 

module.exports = router; 