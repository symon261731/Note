require('dotenv').config();

module.exports = {
  development: {
    username: 'simon',
    password: '123',
    database: 'note',
    // host: '127.0.0.1',
    host: 'postgres',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: 'postgres',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: 'postgres',
    dialect: 'mysql',
  },
};
