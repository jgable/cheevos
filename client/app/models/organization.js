export default DS.Model.extend({
	name: DS.attr('string'),

	people: DS.hasMany('user', { async: true }),
	achievements: DS.hasMany('achievement', { async: true })
});