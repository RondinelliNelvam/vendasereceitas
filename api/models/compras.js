'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compras extends Model {
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Compras.belongsTo(models.Jogos, {
        foreignKey: 'jogo_id_compra'
      })
  }
}
  Compras.init({
    quantidade_compra: DataTypes.DECIMAL,
    data_compra: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Compras',
  });
  return Compras;
};