// Import Sequelize instance and models
import sequelize from './config/database'; // Assuming this is your Sequelize instance
import "./models/Profile"

// Define associations between models if needed

// Sync models with the database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized successfully');
  })
  .catch(error => {
    console.error('Error synchronizing database:', error);
  });
