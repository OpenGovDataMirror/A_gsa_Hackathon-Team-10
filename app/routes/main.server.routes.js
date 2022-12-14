'use strict';

/**
 * Module dependencies.
 */
var main = require('../../app/controllers/main.server.controller');

module.exports = function(app) {
console.log('In autocomplete');
	app.route('/inflo/api/autoComplete')
		.get(main.autoComplete);	

	app.route('/inflo/api/search')
		.get(main.searchByDuns);	

	app.route('/inflo/api/details')
		.get(main.getDetails);	

};
