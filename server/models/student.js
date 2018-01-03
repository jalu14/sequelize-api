'use strict';
module.exports = (sequelize, DataTypes) => {
  var Students = sequelize.define('Students', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER
    },
    bonoboBrain:  {
      type:DataTypes.BOOLEAN
    }
  });

  // Association with Students model, we then add it to the migration file aswell
  Students.associate = (models) => {
    Students.belongsTo(models.Professors);
  };

  // Many to many
  Students.associate = (models) => {
    Students.belongsToMany(models.Grades, {as: 'grades',through: 'StudentGrades', foreignKey: 'studentId'});
  };

  return Students;
};