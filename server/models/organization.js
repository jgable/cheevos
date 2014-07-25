var Sequelize = require('sequelize'),
    sequelize = require('./db').instance;

var Organization = sequelize.define('Organization', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Organization;
