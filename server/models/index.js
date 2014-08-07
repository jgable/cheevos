var User = require('./user'),
    Organization = require('./organization'),
    Achievement = require('./achievement'),
    UserAchievement = require('./userAchievement');

// Setup relationships

User.hasMany(Organization, { as: 'Organizations', through: 'UserOrganizations', foreignKey: 'userId' });

Organization.hasMany(Achievement, { as: 'Achievements', foreignKey: 'organizationId' });
Organization.belongsTo(User, { as: 'Creator', foreignKey: 'creatorId' });
Organization.hasMany(User, { as: 'People', through: 'UserOrganizations', foreignKey: 'organizationId' });

Achievement.hasMany(UserAchievement, { as: 'Nominations', foreignKey: 'achievementId' });

UserAchievement.belongsTo(User, { as: 'Nominator', foreignKey: 'nominatorId' });
UserAchievement.belongsTo(User, { as: 'Accepter', foreignKey: 'accepterId' });

// Export for usage

module.exports = {
    User: User,
    UserAchievement: UserAchievement,
    Organization: Organization,
    Achievement: Achievement
};
