//setting up user model
let jwt = require('jsonwebtoken'),
    connection = require('../connection');

class User {
    get(res) {
        connection.acquire((err, con) => {
            con.query('SELECT * FROM users', (err, result) => {
                con.release();
                res.send(result);
            });
        });
    };

    createUser(user, res) {
        connection.acquire((err, con) => {
            con.query('INSERT into users set ?', user, (err, result) => {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'USER creation failed'});
                } else {
                    res.send({status: 0, message: 'USER created successfully'});
                }
            });
        });
    };
    
    update(user, res) {
        connection.acquire((err, con) => {
            con.query('update users set ? WHERE id = ?', [user, user.id], (err, result) => {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'USER update failed'});
                } else {
                    res.send({status: 1, message: 'USER updated successfully'});
                }
            });
        });
    };

    delete(id, res) {
        connection.acquire((err, con) => {
            con.query('delete FROM users WHERE id = ?', [id], (err, result) => {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Failed to delete user'});
                } else {
                    res.send({status: 0, message: 'Deleted successfully'});
                }
            });
        });
    };

    createAdmin(admin, res) {
        connection.acquire((err, con) => {
            con.query('INSERT into admins set ?', admin, (err, result) => {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'ADMIN creation failed'});
                } else {
                    res.send({status: 0, message: 'ADMIN created successfully'});
                }
            });
        });
    };

    adminLogin(req, res) {
        connection.acquire((err, con) => {
            con.query('SELECT * FROM admins WHERE username = ?', [req.username],(err, result) => {
                con.release();
                if (result.length == 0) {
                    res.status(404).send({ status: 1, message: 'username not found' });
                }
                if (!req.username) {
                    res.status(404).send({ status: 1, message: 'username required' });
                }
                if (!req.password) {
                    res.status(404).send({ status: 1, message: 'password required' });
                }
                if (req.password != result[0].password) {
                    res.status(404).send({ status: 1, message: 'password is incorrect' });
                }
                if (req.username == result[0].username && req.password == result[0].password) {
                    let myToken = jwt.sign({ username: req.username }, 'needToBeSecure');
                    res.status(200).send(myToken);
                    console.log(myToken);
                }
            });
        });
    };
}

module.exports = new User();











