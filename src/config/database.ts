import { Sequelize } from 'sequelize';

// Load environment variables from .env file
require('dotenv').config();

// Ensure that environment variables are defined
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

if (!dbName || !dbUser || !dbPassword || !dbHost) {
  throw new Error('Environment variables for database connection are not properly defined.');
}

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
});

export default sequelize;
