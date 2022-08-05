'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Receitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jogo_id_receita: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model: 'Jogos', key: 'id'}
      },
      saldo_positivo: {
        type: Sequelize.DECIMAL
      },
      saldo_negativo: {
        type: Sequelize.DECIMAL
      },
      saldo_total: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Receitas');
  }
};