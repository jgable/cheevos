var Sequelize = require('sequelize'),
    sequelize = require('./db').instance;

var UserAchievement = sequelize.define('UserAchievement', {
    reason: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nominatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    acceptedAt: {
        type: Sequelize.DATE,
        allowNull: true
    }
});

module.exports = UserAchievement;
