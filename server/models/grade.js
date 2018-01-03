'use strict';
module.exports = (sequelize, DataTypes) => {
  var Grades = sequelize.define('Grades', {
    name: {
      type: DataTypes.STRING
    },
    isEasy: {
      type: DataTypes.BOOLEAN
    },
    isExpensive:{
      type: DataTypes.BOOLEAN
    }
  });

  // Association with Student model, we then add it to the migration file aswell
  Grades.associate = (models) => {
    Grades.belongsToMany(models.Students, {through: 'StudentGrades', foreignKey: 'gradeId'});
  };

  Grades.associate = (models) => {
    Grades.belongsTo(models.Professors, {as: 'professor'});
  };

  return Grades;
};