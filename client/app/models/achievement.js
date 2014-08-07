export default DS.Model.extend({
	name: DS.attr('string'),
	image: DS.attr('string'),

	organization: DS.hasOne('organization', { async: true }),

	nominators: DS.hasMany('userAchievement', { async: true }),
	accepters: DS.hasMany('userAchievement', { async: true })
});
