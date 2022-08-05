'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Receitas', [
      {
        jogo_id_receita: 1,
        saldo_positivo: 0,
        saldo_negativo: 0,
        saldo_total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_receita: 3,
        saldo_positivo: 0,
        saldo_negativo: 0,
        saldo_total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_receita: 4,
        saldo_positivo: 0,
        saldo_negativo: 0,
        saldo_total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_receita: 5,
        saldo_positivo: 0,
        saldo_negativo: 0,
        saldo_total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_receita: 6,
        saldo_positivo: 0,
        saldo_negativo: 0,
        saldo_total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_receita: 7,
        saldo_positivo: 0,
        saldo_negativo: 0,
        saldo_total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_receita: 17,
        saldo_positivo: 0,
        saldo_negativo: 0,
        saldo_total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_receita: 18,
        saldo_positivo: 0,
        saldo_negativo: 0,
        saldo_total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_receita: 19,
        saldo_positivo: 0,
        saldo_negativo: 0,
        saldo_total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_receita: 20,
        saldo_positivo: 0,
        saldo_negativo: 0,
        saldo_total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jogo_id_receita: 22,
        saldo_positivo: 0,
        saldo_negativo: 0,
        saldo_total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Receitas',null, {})
  }
};
