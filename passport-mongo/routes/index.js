var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){

	

	/* Handle Login POST */
	router.post('/', passport.authenticate('login', {
		/*successRedirect: '',
		failureRedirect: '/',
		failureFlash : true */ 
	}));

	
	/* Handle Registration POST */
	router.post('/', passport.authenticate('signup', {
		/*successRedirect: '../public/index.html',
		failureRedirect: '/',
		failureFlash : true */
	}));

	

	return router;
}