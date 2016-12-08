var Articles = require('../models/articles');
var Cookies = require( "cookies" );

var helpers = {};

//Function that checks if the request is authenticated or not.
helpers.isAuthenticated = function(req, res, next){
	var cookies = new Cookies( req, res );

	var user = cookies.get( "user_auth" );

	if(!user){
		res.status(401);
		res.send({ status:'error', error:'Not Authorized.' });
	}
	else{
		/*var user = user.getBySessionId(req.query.sessionId);
		user.then(function(dbUser){
			if(dbUser){
				next();
			}
			else{
				res.status(401);
				res.send({status:'error', error:'Not Authorized.'});
			}	
		});*/
		next();
	}
};

module.exports = helpers;
