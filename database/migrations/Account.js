module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('accounts', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING(40),
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(40),
          unique:true,
        },
        secret: {
          allowNull: true,
          type: Sequelize.STRING(16),
        },
        type: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        premdays: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        lastday: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
        creation: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('accounts');
    },
  };