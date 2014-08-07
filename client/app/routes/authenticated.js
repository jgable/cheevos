export default Ember.Route.extend({
    isLoggedIn: Ember.computed.bool('user.isLoggedIn'),

    beforeModel: function () {
        if (!this.get('isLoggedIn')) {
            return this.transitionTo('login');
        }
    }
});