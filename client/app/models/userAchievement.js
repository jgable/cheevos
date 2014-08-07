export default DS.Model.extend({
	reason: DS.attr('string'),
	nominatedAt: DS.attr('date'),
	acceptedAt: DS.attr('date'),

	achievement: DS.hasOne('achievement', { async: true }),
	nominator: DS.hasOne('user', { async: true }),
	accepter: DS.hasOne('user', { async: true })
});
