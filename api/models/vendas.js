'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendas extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vendas.belongsTo(models.Jogos, {
        foreignKey: 'jogo_id_venda'

      })
    }
  }
  Vendas.init({
    quantidade_vendas: DataTypes.FLOAT,
    data_venda: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Vendas',
  });
  return Vendas;
};