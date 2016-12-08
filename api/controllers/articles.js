var articleModel = require('../models/articles');

var articles = {};

// controller that handles articles listings fetch request.
articles.get = function (req, res) {

	var skip = req.query.skip,
		limit = req.query.limit,
		articlesData = articleModel.get(skip, limit);

	articlesData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.send(err);
	});
};

// controller that handles single article fetch request.
articles.getOne = function (req, res) {
	var articleId = req.query.articleId,
		articlesData = articleModel.getOne(articleId);

	articlesData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};
// controller that add single article fetch request.
articles.insertOne = function (req, res){
	var article = req.query.article,
		articlesData = articleModel.insertOne(article);

	articlesData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};

module.exports = articles;