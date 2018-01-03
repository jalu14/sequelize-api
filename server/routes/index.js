const studentController = require('../controllers').student;
const professorController = require('../controllers').professor;
const gradeController = require('../controllers').grade;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  /* Students */
  app.get('/api/students', studentController.findAll); // GetAll          GET
  app.get('/api/students/:id', studentController.findId); // GetOne       GET
  app.post('/api/students', studentController.create); // Create          POST

  /* Professors */
  app.get('/api/professors', professorController.findAll); // GetAll      GET
  app.get('/api/professors/:id', professorController.findId); // GetOne   GET
  app.post('/api/professors', professorController.create); // Create      POST

  /* Grades */
  app.get('/api/grades', gradeController.findAll); // GetAll              GET
  app.get('/api/grades/:id', gradeController.findId); // GetOne           GET
  app.post('/api/grades', gradeController.create); // Create              POST
  app.put('/api/grades/:id', gradeController.edit); // Edit               PUT
};