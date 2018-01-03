const Professor = require('../models').Professors;
const Grade = require('../models').Grades;
const Student = require('../models').Students;

module.exports = {
  findAll(req, res) {
    return Professor
      .all({
        include: [
          {
            model: Grade,
            as: 'grade',
            attributes: ['id', 'name']            
          }
        ],
        attributes: ['id', 'name', 'bachelors', 'payroll'],
      })
      .then(data => {
        res.status(200).send(data)
      })
      .catch(error => res.status(400).send(error));
  },

  findId(req, res) {
    return Professor
      .findById(req.params.id, {
        include: [
          {
            model: Grade,
            as: 'grade',
            attributes: ['id', 'name']            
          }
        ],
        attributes: ['id', 'name', 'bachelors', 'payroll'],
      })
      .then(data => {
        if (!data){
          data = {message: 'No professor with ID ' + req.params.id};
        }
        res.status(200).send(data)
      })
      .catch(error => res.status(400).send(error));
  },

  create(req, res) {
    return Professor
      .create({
        name: req.body.name,
        bachelors: req.body.bachelors,
        payroll: req.body.payroll,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
};