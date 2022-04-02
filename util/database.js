const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: 5432,
  dialect: 'postgres',
  logging: false
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }

});

// Host
// ec2-44-193-188-118.compute-1.amazonaws.com
// Database
// d999i6gvbs6eu0
// User
// gfhyaztubsixne
// Port
// 5432
// Password
// 655d5e901df9fbccd4339b39ab9adf427f8141b3333c110b5506287aafc4b5d4

module.exports = { sequelize };
