
var _ = require('lodash'),
	auth = require('../../../middleware/auth'),
	models = require('../../../models');

module.exports = function (router) {
	// /api/v1/users

	router.use(auth.ensureAuthenticated());

	router.get('/:userId', function (req, res) {
		var userId = req.param('userId');

		models.User.find(userId)
			.then(function (found) {
				if (!found) {
					return res.send(404);
				}

				res.json({
					user: _.omit(found.toJSON(), 'token', 'hash', 'salt', 'activationKey', 'resetPasswordKey')
				});
			}, function (err) {
				res.send(500, err.message);
			});
	});

	router.get('/:userId/organizations', function (req, res) {
		var userId = req.param('userId');

		models.User.find(userId, {
				include: 'Organizations'
			})
			.then(function (found) {
				if (!found) {
					return res.send(404);
				}

				res.json({
					organizations: found.organizations
				});
			}, function (err) {
				res.send(500, err.message);
			});
	});
};
