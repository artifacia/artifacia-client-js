"use strict";
var request = require('request');

// module.exports = artifacia;

exports.artifacia = function(username, password, callback){

	var ret;
	console.log(username);
	console.log(password);
	exports.upload_user_data = function(data,callback){

		var baseUrl = 'http://api.artifacia.com/v1/users';
		var headers = {
			'Content-Type' : 'application/json'
		};

		var authorise = {
			user: username,
			pass: password
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'POST',
			json: true,
			body: data,
			auth: authorise
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			//  console.log(body);
			ret = body;
			callback(ret)
		});
	}

	exports.upload_item_data = function(data, callback){

		var baseUrl = 'http://api.artifacia.com/v1/items';
		var headers = {
			'Content-Type' : 'application/json'
		};

		var authorise = {
			user: username,
			pass: password
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'POST',
			json: true,
			body: data,
			auth: authorise
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			//  console.log(body);
			ret = body;
			callback(ret)
		});
	}

	exports.delete_item_data = function(data, callback){

		var baseUrl = 'http://api.artifacia.com/v1/items';
		var headers = {
			'Content-Type' : 'application/json'
		};

		var authorise = {
			user: username,
			pass: password
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'DELETE',
			json: true,
			body: data,
			auth: authorise
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			 console.log(body);
			 ret = body;
			 callback(ret)
		});
	}

	exports.get_visual_recommendation = function(prod_id, callback){

		console.log(prod_id);

		var baseUrl = 'http://api.artifacia.com/v1/recommendation/similar/'+prod_id;
		var headers = {
			'Content-Type' : 'application/json'
		};

		var authorise = {
			user: username,
			pass: password
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'GET',
			json: true,
			auth: authorise
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			// console.log(body);
			ret = body;
			callback(ret)
		});
	}

	exports.get_cpr_recommendation = function(prod_id, callback){

		console.log(prod_id);

		var baseUrl = 'http://api.artifacia.com/v1/recommendation/collections/'+prod_id;
		var headers = {
			'Content-Type' : 'application/json'
		};

		var authorise = {
			user: username,
			pass: password
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'GET',
			json: true,
			auth: authorise
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			//  console.log(body);
			ret = body;
			callback(ret)
		});
	}
	exports.get_smart_recommendation = function(user_id, callback){

		console.log(prod_id);

		var baseUrl = 'http://api.artifacia.com/v1/recommendation/user/'+user_id;
		var headers = {
			'Content-Type' : 'application/json'
		};

		var authorise = {
			user: username,
			pass: password
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'GET',
			json: true,
			auth: authorise
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			//  console.log(body);
			ret = body;
			callback(ret)
		});
	}
}