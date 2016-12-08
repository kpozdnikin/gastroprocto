var mongoose = require('mongoose');
var q = require('q');
var Schema = mongoose.Schema;

//defining schema for videos table
var articlesSchema = new Schema({
	name: { type: String },
	authorId: Number,
	text: String,
	description: { type: String },
	url: String,
	imgUrl: String,
	ratings: [{ userId: Number, rating: Number }],
	commentsTreeId: Number,
	dateCreate: { type: Date, default: Date.now },
	dateModified: { type: Date, default: Date.now },
	userModified: Number,
	isDeleted: Boolean
});
//To use our schema definition, we need to convert our blogSchema into a Model we can work with
var Article = mongoose.model('articles', articlesSchema);

//Initlizing interface object of this model.
var articlesModel = {};

//Insert article into database
articlesModel.insertOne = function(article){
	var results = q.defer();
	var error = checkArticleError(article);
	if(error){
		results.reject({ status:'error', error:error });
	}
	//Добавляем статью
	if(!error){
		Article.collection.insert(article, function(err, dbArticle) {
			if(err){
				console.log('error occured in populating database');
				console.log(err);
			}
			else{
				console.log('Article inserted.');
				results.resolve(dbArticle);
			}
		});
	}
	return results.promise;
};

//function to get articles listings
articlesModel.get = function(skip, limit){
	var results = q.defer();

	skip = parseInt(skip) || 0;
	limit = parseInt(limit) || 10;

	Article.find(function(err, dbArticles) {
		if (err){
			results.reject(err);
		} 
		results.resolve(dbArticles);
	}).skip(skip).limit(limit);
	return results.promise;
};

//function to get single video by its id.
articlesModel.getOne = function(id){
	var results = q.defer();
	if(!id){
		results.reject({ status:'error', error:'Article Id not supplied.' });
	}
	Article.findOne({ _id: id }, function(err, dbArticles) {
		if (err){
			results.reject(err);
		} 
		
		if(dbArticles){
			results.resolve(dbArticles);
		} else{
			results.reject({status:'error', error:'Invalid article Id supplied.'});
		}
	});
	return results.promise;
};

//update the article
articlesModel.updateOne = function(article) {
	var results = q.defer();
	var error = checkArticleError(article);

	if(error){
		results.reject({ status:'error', error:error });
	}

	//Обновляем статью
	if(!error){
		Article.findOne({ _id:id }, function(err, dbArticles) {
			if (err){
				results.reject(err);
			}
			dbArticles = article;
			dbArticles.dateModified = new Date;
			dbArticles.save();
			results.resolve(dbArticles);
		});
	}
	return results.promise;
};

//delete article
articlesModel.delete = function(articleId){
	var results = q.defer();
	var error = false;

	if(articleId){
		results.reject({ status:'error', error:error });
		error = true;
	}
	if(!error){
		Article.findOne({ _id:id }, function(err, dbArticles) {
			if (err){
				results.reject(err);
			}
			//delete the article
			dbArticles.remove(function (err, dbResult) {
				if (err)
					results.reject(err);
				console.log('Article successfully deleted');
				results.resolve(dbResult);
			});
		});
	}
	return results.promise;
};

//check input validation
function checkArticleError(article) {
	if (!article.id) {
		return 'Article Id not supplied.';
	}
	if (!article.text) {
		return 'Text not supplied.';
	}
	if (!article.url) {
		return 'Url not supplied.';
	}
	if (!article.name) {
		return 'Name not supplied.';
	}
	if (!article.authorId) {
		return 'Author not supplied.';
	}
	if (!article.commentsTreeId) {
		return 'Comments column not supplied.';
	}
	return false;
}

module.exports = articlesModel;