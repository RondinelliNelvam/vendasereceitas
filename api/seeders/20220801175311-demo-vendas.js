'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vendas', [
      {
        jogo_id_venda: 1,
        quantidade_vendas: 10,
        data_venda: '2022-05-13',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_venda: 3,
        quantidade_vendas: 8,
        data_venda: '2002-11-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_venda: 1,
        quantidade_vendas: 8,
        data_venda: '2012-11-13',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_venda: 1,
        quantidade_vendas: 6,
        data_venda: '2005-02-03',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vendas',null, {})
  }
};