var Sequelize = require('sequelize'),
    sequelize = require('./db').instance;

var Achievement = sequelize.define('Achievement', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Achievement;
