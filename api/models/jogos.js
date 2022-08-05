'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogos extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Jogos.hasMany(models.Vendas, {
        foreignKey: 'jogo_id_venda',
        as: 'vendasDoJogo'
      })
      Jogos.hasMany(models.Compras, {
        foreignKey: 'jogo_id_compra'
      })
      Jogos.hasMany(models.Receitas, {
        foreignKey: 'jogo_id_receita'
      })
    }
  }
  Jogos.init({
    nome: DataTypes.STRING,
    data_lancamento: DataTypes.DATEONLY,
    valor_venda: { type: DataTypes.DECIMAL, validate: { isDecimal: { args: true, msg: 'informações invalidas' } } },
    valor_compra: DataTypes.DECIMAL,
    estoque: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid: true,
    defaultScope: { where: { estoque: true } },
    scopes: { todos: { where: {} } },
    modelName: 'Jogos',
  });
  return Jogos;
};