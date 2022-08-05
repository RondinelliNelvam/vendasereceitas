'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Receitas.belongsTo(models.Jogos, {
        foreignKey: 'jogo_id_receita'
      })
    }
  }
  Receitas.init({
    saldo_positivo: DataTypes.DECIMAL,
    saldo_negativo: DataTypes.DECIMAL,
    saldo_total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Receitas',
  });
  return Receitas;
};