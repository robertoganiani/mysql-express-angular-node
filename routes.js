//define routes
let user = require('./models/user');

module.exports = {
  configure: (app) => {
      //get users list from USERS table
       app.get('/user', (req, res) => {
          user.get(res);
      });

      //add user to USERS table
      app.post('/user/add', (req, res) => {
          user.createUser(req.body, res);
          console.log(req.body);
      });

      //update user in USERS table
      app.put('/user', (req, res) => {
          user.update(req.body, res);
      });

      //delete user from USERS table
      app.delete('/user/:id', (req, res) => {
          user.delete(req.params.id, res);
      });

      //register admin to ADMINS table
      app.post('/user/register', (req, res) => {
          user.createAdmin(req.body, res);
      });

      //admin login route
      app.post('/user/login', (req, res) => {
          user.adminLogin(req.body, res);
      });

      app.get('*', function(req, res) {
          res.sendfile('./index.html');
      });
  }
};