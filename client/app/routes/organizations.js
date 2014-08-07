import AuthenticatedRoute from 'appkit/routes/authenticated';

export default AuthenticatedRoute.extend({
	model: function () {
		return this.store.find('organizations', {
			user: this.get('user.id')
		});
	}
});
