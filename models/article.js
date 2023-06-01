<<<<<<< HEAD
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
    designation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reference: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    marque: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    qtestock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prix: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    imageart: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    scategorieID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'scategorie',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'article',
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
        name: "scategorieID",
        using: "BTREE",
        fields: [
          { name: "scategorieID" },
        ]
      },
    ]
  });
};
=======
const mongoose =require("mongoose")
const Scategorie =require("./scategories.js");
const articleSchema=mongoose.Schema({
 reference:{ type: String, required: true,unique:true },
 designation:{ type: String, required: true,unique:true },
 prix:{ type: Number, required: false },
 marque:{ type: String, required: true },
 qtestock:{ type: Number, required: false },
 imageart:{ type: String, required: false },
 scategorieID: {type:mongoose.Schema.Types.ObjectId,
 ref:Scategorie}
 })
 module.exports=mongoose.model('article',articleSchema) 
>>>>>>> 0d9da100581d714aa57d7df8dbb8323fe00e6fb7
