//var users = require('../controllers/users');
var articles = require('../controllers/articles');
var helpers = require('../helpers/helperFunctions');

var routesAPI = function(app){
	//user routes
	//app.post('/user/auth', users.auth);
	//app.get('/user/logout', helpers.isAuthenticated, users.logout);

	//articles routes
	app.get('/api/articles', helpers.isAuthenticated, articles.get);
	app.get('/article', helpers.isAuthenticated, articles.getOne);
    app.post('/article', helpers.isAuthenticated, articles.getOne);
    app.put('/article', helpers.isAuthenticated, articles.insertOne);


    //app.post('/articles/comments', helpers.isAuthenticated, videos.rate);
};


module.exports = routesAPI;