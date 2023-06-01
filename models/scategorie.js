const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scategorie', {
    nomscategorie: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    imagecat: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CategorieID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categorie',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'scategorie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "CategorieID",
        using: "BTREE",
        fields: [
          { name: "CategorieID" },
        ]
      },
    ]
  });
};
