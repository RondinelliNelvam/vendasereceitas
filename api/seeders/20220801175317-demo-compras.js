'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Compras', [
      {
        jogo_id_compra: 1,
        quantidade_compra: 7,
        data_compra: '2012-10-21',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_compra: 3,
        quantidade_compra: 8,
        data_compra: '2021-11-03',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_compra: 4,
        quantidade_compra: 9,
        data_compra: '2014-12-14',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_compra: 1,
        quantidade_compra: 6,
        data_compra: '2003-12-23',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Compras',null, {})
  }
};