'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentsGrades = sequelize.define('StudentsGrades', {
    status: {
      type: DataTypes.STRING
    }
  });

  return StudentsGrades;
};