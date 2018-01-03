'use strict';
module.exports = (sequelize, DataTypes) => {
  var Professors = sequelize.define('Professors', {
    name: {
      type: DataTypes.STRING
    },
    bachelors: {
      type: DataTypes.INTEGER
    },
    payroll: {
      type: DataTypes.DECIMAL
    }
  });

  // Association with Grade model, using hasOne to demonstrate a different association
  Professors.associate = (models) => {
    Professors.hasOne(models.Grades, {foreignKey: 'professorId'});
  };

  Professors.associate = (models) => {
    Professors.hasMany(models.Students, {foreignKey: 'professorId'});
  };

  Professors.associate = (models) => {
    Professors.belongsTo(models.Grades, {as: 'grade'});
  };

  return Professors;
};