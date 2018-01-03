const Student = require('../models').Students;
const Grade = require('../models').Grades;
const Professor = require('../models').Professors;

module.exports = {
  findAll(req, res) {
    return Student
      .all({
        include: [
          {
            model: Grade,
            as: 'grades',
            attributes: ['id', 'name', 'isEasy', 'isExpensive'],
            through: {attributes: []}
          },
          // {
          //   model: Professor,
          //   as: 'professor',
          //   attributes: ['id', 'name'],
          // }
        ],
        attributes: ['id', 'name', 'age', 'bonoboBrain'],
      })
      .then(data => {
        res.status(200).send(data)
      })
      .catch(error => res.status(400).send(error));
  },

  findId(req, res) {
    return Student
      .findById(req.params.id, {
        include: [
          {
            model: Grade,
            as: 'grades',
            attributes: ['id', 'name', 'isEasy', 'isExpensive'],
            through: {attributes: []}
          }
        ],
        attributes: ['id', 'name', 'age', 'bonoboBrain'],
      })
      .then(data => {
        if (!data){
          data = {message: 'No student with ID ' + req.params.id};
        }
        res.status(200).send(data)
      })
      .catch(error => res.status(400).send(error));
  },

  create(req, res) {
    return Student
      .create({
        name: req.body.name,
        age: req.body.age,
        bonoboBrain: req.body.bonoboBrain,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
};