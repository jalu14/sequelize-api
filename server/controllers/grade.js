const Grade = require('../models').Grades;
const Professor = require('../models').Professors;
const Student = require('../models').Students;

module.exports = {
  findAll(req, res) {
    return Grade
      .all({
        include: [
            {
              model: Professor,
              as: 'professor',
              attributes: ['id', 'name']
            },
        ],
        attributes: ['id', 'name', 'isEasy', 'isExpensive'],
      })
      .then(data => {
        res.status(200).send(data)
      })
      .catch(error => res.status(400).send(error));
  },

  findId(req, res) {
    return Grade
      .findById(req.params.id, {
        include: [{
            model: Professor,
            as: 'professor',
            attributes: ['id', 'name']
        }],
        attributes: ['id', 'name', 'isEasy', 'isExpensive'],
      })
      .then(data => {
        if (!data){
          data = {message: 'No grade with ID ' + req.params.id};
        }
        res.status(200).send(data)
      })
      .catch(error => res.status(400).send(error));
  },

  create(req, res) {
    return Professor
      .create({
        name: req.body.name,
        isEasy: req.body.isEasy,
        isExpensive: req.body.isExpensive,
        professorId: req.body.professorId,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },

  edit(req, res) {
    return Grade
      .findById(req.params.id)
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: 'No grade with ID ' + req.params.id,
          });
        }
        console.log(req.body.name);
        return data
          .update({
            name: req.body.name || data.name,
          })
          .then(() => res.status(200).send(data))  // Return the grade updated
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};