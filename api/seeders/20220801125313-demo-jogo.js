'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Jogos', [
    {
      nome: 'Diablo III',
      data_lancamento: '2013-11-26',
      valor_venda: 70,
      valor_compra: 50,
      estoque: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Call of Duty V',
      data_lancamento: '2017-04-15',
      valor_venda: 130,
      valor_compra: 115,
      estoque: false,
      createdAt: new Date(),
      updatedAt: new Date()      
    },
    {
      nome: 'Final Fantasy III',
      data_lancamento: '1987-03-17',
      valor_venda: 80,
      valor_compra: 50,
      estoque: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Age of Empires VI',
      data_lancamento: '2021-04-12',
      valor_venda: 50,
      valor_compra: 35,
      estoque: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Jogos',null, {})
  }
};
