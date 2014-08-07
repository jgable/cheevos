export default Ember.ArrayController.extend({
	organizations: Ember.computed.alias('model'),

	newName: null,

	actions: {
		create: function () {
			var self = this,
				name = this.get('newName');

			var newOrg = this.store.createRecord('organization', {
				name: name
			});

			newOrg.save().then(function () {
				self.set('newName', null);
				self.transitionToRoute('organization', newOrg);
			}).catch(function () {
				window.alert('There was an error creating the organization');
			});
		}
	}
});