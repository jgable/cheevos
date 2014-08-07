export default DS.Model.extend({
	username: DS.attr('string'),
	token: DS.attr('string'),

	organizations: DS.hasMany('organization', { async: true }),

	nominations: DS.hasMany('userAchievement', { async: true }),
	achievements: DS.hasMany('userAchievement', { async: true })
});
