
var _ = require('lodash'),
	auth = require('../../../middleware/auth'),
	models = require('../../../models');

module.exports = function (router) {
	// /api/v1/organizations

	router.use(auth.ensureAuthenticated());

	// Get organizations
	router.get('/', function (req, res) {
		var filters = _.pick(req.query, 'creator', 'name', 'slug', 'user');

		if (filters.user) {
			// Get the user, then get the organizations
			// OR, create a custom query for this
		}

		return models.Organization.findAll().then(function (found) {
			if (!found) {
				return res.send(404);
			}

			return res.json({
				organizations: found
			});
		}, function (err) {
			res.send(500, err.message);
		});
	});

	// Create a new organization
	router.post('/', function (req, res) {
		var data = _.pick(req.body, 'name');

		data.creatorId = req.user.id;

		var model = new models.Organization(data);

		model.save()
			.then(function (created) {
				if (!created) {
					return res.send(500, 'Unable to create model');
				}

				res.json({
					organization: created.toJSON()
				});
			}, function (err) {
				res.send(500, err.message);
			});
	});
};
