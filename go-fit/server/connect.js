const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('go-fit', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5000
});


const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connect()