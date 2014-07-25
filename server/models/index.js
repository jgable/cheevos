var User = require('./user'),
    Organization = require('./organization'),
    Achievement = require('./achievement'),
    UserAchievement = require('./userAchievement');

// Setup relationships

UserAchievement.hasOne(User, { as: 'Nominator' });
UserAchievement.hasOne(User, { as: 'Accepter' });

User.hasMany(Organization, { as: 'Organizations' });
User.hasMany(Achievement, {
    as: 'Achievements',
    through: UserAchievement
});

Organization.hasMany(User, { as: 'People' });
Organization.hasMany(Achievement, { as: 'Achievements' });

Achievement.hasOne(Organization);

// Export for usage

module.exports = {
    User: User,
    UserAchievement: UserAchievement,
    Organization: Organization,
    Achievement: Achievement
};
