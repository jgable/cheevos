// ensure we don't share routes between all Router instances
var Router = Ember.Router.extend({
    location: 'pushState' in window.history ? 'history' : undefined
});

Router.map(function () {
    this.route('login');
    this.route('register');
    this.route('forgotpassword');
    this.route('forgotpassword/reset', { path: '/forgotpassword/reset/:resetKey' });
    this.route('user');

    this.resource('organizations', function () {
        this.resource('organization', { path: '/organizations/:organization_id' }, function () {
            // Organizations contain achievements and people
            this.resource('achievements', { path: '/organizations/:organization_id/achievements' }, function () {
                this.route('addAchievement', { path: '/organizations/:organization_id/achievements/create' });
                this.route('achievement', { path: '/organizations/:organization_id/achievements/:achievement_id' });
                this.route('editAchievement', { path: '/organizations/:organization_id/achievements/:achievement_id/edit' });
            });
            this.resource('people', { path: '/organizations/:organization_id/people' }, function () {
                this.route('addPerson', { path: '/organizations/:organization_id/people/create' });
                this.route('person', { path: '/organizations/:organization_id/people/:person_id' });
                this.route('editPerson', { path: '/organizations/:organization_id/people/:person_id/edit' });
            });
        });
    });
    
});

export default Router;
